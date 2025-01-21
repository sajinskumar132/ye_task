import { Response } from "express";

export class CommonHelpers{
    static ResponseHandler(res:Response, status:number, message:string, error?:any,data?:any){
        if (data) {
            return res.status(status).json({ message, data });
        } else {
            return res.status(status).json({ message, error });
        }
    }
}