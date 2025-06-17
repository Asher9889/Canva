import { OAuth2Client } from "google-auth-library";
import config from "../config";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiErrorResponse } from "../utils";

interface IUserPayload {
    userId: string | undefined;
    email: string | undefined;
    name: string| undefined;
}

interface IRequestWithUser extends Request {
    user: IUserPayload
}

const client = new OAuth2Client(config.authGoogleId);

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (!token) {
        const statusCode = StatusCodes.UNAUTHORIZED;
        const msg = "Access denied!!";
        return next(new ApiErrorResponse(statusCode, msg));
    }
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config.authGoogleId
        })
        const payload = ticket.getPayload();

        // add user to req.user
        const reqWithUser = req as IRequestWithUser;
        
        reqWithUser.user = {
            userId: payload?.sub, // payload.sub contains the user id.
            email: payload?.email,
            name: payload?.name
        }

        // add userId as a header so that other services can indentify the user.
        req.headers["x-user-id"] = payload?.sub; // mandatory

        // these two are optional
        req.headers["x-user-email"] = payload?.email; 
        req.headers["x-user-name"] = payload?.name

        next(); // pass controll to other middleware
    } catch (error) {
        next(error);
    }
}

export default authMiddleware;