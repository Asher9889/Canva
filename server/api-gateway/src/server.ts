import express, { ErrorRequestHandler, NextFunction, Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from "./routes";
import proxy from "express-http-proxy";
import config from "./config";
import { ApiErrorResponse } from "./utils";
import { StatusCodes } from "http-status-codes";
import { globalErrorHandler, authMiddleware } from "./middlewares";


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true}))

// Proxy options
const proxyOptions = {
    proxyReqPathResolver: (req:Request)=>{
        return req.originalUrl.replace(/^\v1/, "/api")
    },
    proxyErrorHandler: (err:any, res:Response, next:NextFunction) => {
        const statusCode =  err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        const msg = err.message || "Internal Server Error";
        const error = new ApiErrorResponse(statusCode, msg);
        next(error);
    }
}

// Proxy for design service
app.use("/v1/design",authMiddleware, proxy(config.designURL, {
    ...proxyOptions,
    // parseReqBody: true,
}));

// Proxy for upload service
app.use("/v1/media",authMiddleware, proxy(config.uploadURL, {
    ...proxyOptions,
    parseReqBody: false,
}));

// need some extra logic for auth middleware
app.use("/v1/subscription",authMiddleware, proxy(config.subscriptionURL, {
    ...proxyOptions,
    // parseReqBody: false,
}));

app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
    const message = "Invalid Route";
    const statusCode = StatusCodes.BAD_GATEWAY;
    next(new ApiErrorResponse(statusCode, message))
})

app.use(globalErrorHandler as any);

app.listen(config.port, ()=>{
    console.log(`Api Gateway is running on ${config.port} port`)
    console.log(`Design Service is running on ${config.designPort} port`)
    console.log(`Upload Service is running on ${config.uploadPort} port`)
    console.log(`Subscription Service is running on ${config.subscriptionPort} port`)
})