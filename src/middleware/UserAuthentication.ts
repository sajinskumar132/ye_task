import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UserModels";

interface AuthenticatedRequest extends Request {
    user?: Record<string, any>; // Define the type of `user` based on your application's needs
}

export const UserAuthentication = (access_role: string|null) => {
    return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Authorization header is missing." });
            }

            const token = authHeader.split(" ")[1];
            if (!token) {
                return res.status(401).json({ message: "Token is missing." });
            }

            const userDetails: any = jwt.verify(token, process.env.SECRETKEY || "");
            if (userDetails) {
                const { id } = userDetails;
                const existing_user = await User.findOne({_id:id}).populate("user_role");
                const role:any = existing_user?.user_role; // Adjust based on your role model
                if(access_role){
                    if (existing_user) {
                        if(role?.role_name != access_role){
                            return res.status(401).json({ message: "Not have permission to access this api." });
                        }
                    } else {
                        return res.status(401).json({ message: "User not found." });
                    }
                }
                req.user = {...userDetails,role_name:role?.role_name}; 
                next();
            }
           
        } catch (error) {
            console.error("Authentication error:", error);
            return res.status(401).json({ message: "Unauthorized user." });
        }
    };
};
