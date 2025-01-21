import { RequestHandler} from "express";
import { CommonHelpers } from "../services/CommonHelper";
import Status from "../models/StatusModel";

export const get_all_status: RequestHandler = async (_, res) => {
    try {
        const new_status = await Status.find()
        return CommonHelpers.ResponseHandler(res, 200, "Successfully get status",null, new_status)
    } catch (error) {
        console.log(error)
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get status", error)
    }
}

export const create_new_status: RequestHandler = async (req, res) => {
    try {
        const { status_name } = req.body
        if (!status_name) return CommonHelpers.ResponseHandler(res, 400, "Status name is required")
        const existing_status = await Status.findOne({ status_name })
        if (existing_status) return CommonHelpers.ResponseHandler(res, 400, "Status name already exists")
        const new_status = new Status({ status_name: status_name })
        await new_status.save()
        return CommonHelpers.ResponseHandler(res, 201, "Successfully created new status")
    } catch (error) {
        console.log(error)
        return CommonHelpers.ResponseHandler(res, 500, "Failed to create new status", error)
    }
}

