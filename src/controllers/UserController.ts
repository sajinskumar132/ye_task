import { RequestHandler } from "express";
import { CommonHelpers } from "../services/CommonHelper";
import { UserServices } from "../services/UserServices";
import User from "../models/UserModels";
import bcrypt from 'bcryptjs';
import Roles from "../models/RoleModel";
import jwt from 'jsonwebtoken';
import Department from "../models/DepartmentModel";

export const get_all_users:RequestHandler=async(_,res)=>{
    try {
        const users = await User.find({})
        .select(["_id", "user_name", "email_id","user_role","user_status"])
        .populate("user_role", ["role_name"])
        .populate("user_status", ["status_name"]);
        return CommonHelpers.ResponseHandler(res, 200,  "Get all users"  ,null,users);
    } catch (error) {
        console.log(error)
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get users", error)
    }
}

export const get_all_students:RequestHandler=async(_,res)=>{
    try {
        const user = await Department.find().populate('user',["user_name", "email_id","user_role","user_status"]);
        return CommonHelpers.ResponseHandler(res, 200,  "Get all users"  ,null,user);
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get users", error)
    }
}

export const user_login:RequestHandler=async(req,res)=>{
    try {
        const {email_id,password}=req.body
        const parameter_validation = UserServices.userEmailAndPasswordValidation({email_id,password})
        if(parameter_validation) return CommonHelpers.ResponseHandler(res, 400, "Validation errors", parameter_validation);
        const user = await User.findOne({ email_id });
        if (!user) return CommonHelpers.ResponseHandler(res, 400,  "User does not exist. Please sign up." , parameter_validation); 
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword)  return CommonHelpers.ResponseHandler(res, 400,  "Incorrect password. Please try again."  , parameter_validation);
        const token = jwt.sign({ id: user._id.valueOf() }, process.env.SECRETKEY||"", { expiresIn: '7d' });
        return CommonHelpers.ResponseHandler(res, 200,  "User successfully login"  ,null,{token});
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to login", error)
    }
}

export const create_new_user:RequestHandler=async (req,res)=>{
    try {
        const {user_role,user_name,email_id,password,user_status,department_name}=req.body
        const parameter_validation = UserServices.userValidations({user_name,email_id,password,user_status,user_role,department_name})
        if(parameter_validation) return CommonHelpers.ResponseHandler(res, 400, "Validation errors", parameter_validation);
        const existing_role = await Roles.findOne({ role_name:user_role })
        if (!existing_role) return CommonHelpers.ResponseHandler(res, 400, "Role not found")
        const existingUser = await User.findOne({ email_id });
        if (existingUser) return CommonHelpers.ResponseHandler(res, 400,  "Email already in use. Please log in or use a different email.")
         
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        const new_user=new User({user_role:existing_role._id,user_name,email_id,password:encryptedPassword,user_status})
        new_user.save()
        if(user_role==="Student"){
            const new_department=new Department({user:new_user._id,department_name})
            new_department.save()
        }
        return CommonHelpers.ResponseHandler(res, 201, "Successfully created new user")
    } catch (error) {
         return CommonHelpers.ResponseHandler(res, 500, "Failed to create new user", error)
    }
}