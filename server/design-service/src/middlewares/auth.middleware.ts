import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiErrorResponse } from "../utils";

interface IUserPayload{
    userId: string;
}

interface IRequestWithUser extends Request{
    user: IUserPayload
}

function authenticatedUser(req:Request, res:Response, next:NextFunction){
    const userId = req.headers["x-user-id"];
    if(!userId || typeof userId !== "string"){
        const statusCode = StatusCodes.UNAUTHORIZED;
        const msg = "Access Denied!. Please login."
        return next(new ApiErrorResponse(statusCode, msg));
    }
    // adding user  to req obj
    const reqWithUser = req as IRequestWithUser;
    reqWithUser.user = {
        userId: userId
    };
    next();
}

export default authenticatedUser;