class ApiErrorResponse extends Error {
    name: string;
    status: boolean;
    statusCode: number;
    data:any

    constructor(statusCode:number, message:string, data:any = null){
        super(message);
        this.name = "ApiErrorResponse";
        this.status = false;
        this.statusCode = statusCode;
        this.data = data;

        if (Error.captureStackTrace) { // only works in v8 and node js
            Error.captureStackTrace(this, ApiErrorResponse); // it means that remove constructor from the stack trace
          }
    }
}

export default ApiErrorResponse;