import { Request, RequestHandler, Response } from "express";
import { CommonHelpers } from "../services/CommonHelper";
import Roles from "../models/RoleModel";


export const get_all_roles: RequestHandler = async (_, res) => {
    try {
        const new_role = await Roles.find()
        return CommonHelpers.ResponseHandler(res, 200, "Successfully get roles", null, new_role)
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get roles", error)
    }
}

export const create_new_role: RequestHandler = async (req, res) => {
    try {
        const { role_name, role_status_id } = req.body
        if (!role_name || !role_status_id) return CommonHelpers.ResponseHandler(res, 400, "Role Name and Role status is required")
        const existing_role = await Roles.findOne({ role_name })
        if (existing_role) return CommonHelpers.ResponseHandler(res, 400, "Role name already exists")
        const new_role = new Roles({ role_name, role_status:role_status_id })
        await new_role.save()
        return CommonHelpers.ResponseHandler(res, 201, "Successfully created new role")
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to create new role", error)
    }
}