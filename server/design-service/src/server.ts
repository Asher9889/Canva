import express from "express";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from "./routes"
import config from "./config"
import { globalErrorHandler } from "./middlewares";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true}))

app.use("/api", apiRoutes);

app.use(globalErrorHandler as any);

app.listen(config.port, ()=>{
    console.log(`Server starts listening from ${config.port}`)
})