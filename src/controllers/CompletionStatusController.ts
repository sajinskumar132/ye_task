import { RequestHandler} from "express";
import { CommonHelpers } from "../services/CommonHelper";
import CompletionStatus from "../models/CompletionStatusModel";

export const get_all_completion_status: RequestHandler = async (_, res) => {
    try {
        const new_status = await CompletionStatus.find()
        return CommonHelpers.ResponseHandler(res, 200, "Successfully get completion status",null, new_status)
    } catch (error) {
        console.log(error)
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get completion status", error)
    }
}

export const create_new_completion_status: RequestHandler = async (req, res) => {
    try {
        const { completion_status_name } = req.body
        if (!completion_status_name) return CommonHelpers.ResponseHandler(res, 400, "Completion status name is required")
        const existing_status = await CompletionStatus.findOne({ completion_status_name })
        if (existing_status) return CommonHelpers.ResponseHandler(res, 400, "Completion status name already exists")
        const new_status = new CompletionStatus({ completion_status_name: completion_status_name })
        await new_status.save()
        return CommonHelpers.ResponseHandler(res, 201, "Successfully created new completion status")
    } catch (error) {
        console.log(error)
        return CommonHelpers.ResponseHandler(res, 500, "Failed to create new completion status", error)
    }
}
