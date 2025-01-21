import { RequestHandler } from "express";
import { CommonHelpers } from "../services/CommonHelper";
import Task from "../models/TaskModel";
import { TaskServices } from "../services/TaskServices";

export const get_tasks: RequestHandler = async (req, res) => {
    try {
        const { id, role_name } = (req as any).user
        if (role_name == "Admin") {
            const tasks = await Task.find()
                .populate("task_created_user",["user_name"])
                .populate("assign_user",["user_name"])
                .populate("status")
            return CommonHelpers.ResponseHandler(res, 201, "Successfully get task", null, tasks)
        } else if (role_name == "Student") {
            const tasks = await Task.find({ _id: id })
                .populate("task_created_user",["user_name"])
                .populate("assign_user",["user_name"])
                .populate("status")
            return CommonHelpers.ResponseHandler(res, 201, "Successfully get task", null, tasks)
        }
        return CommonHelpers.ResponseHandler(res, 400, "Failed to get tasks because role not found")
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to get tasks", error)
    }
}

export const create_new_task: RequestHandler = async (req, res) => {
    try {
        const { id, role_name } = (req as any).user
        const { task_name, task_description, task_due_date_time, assign_user, status } = req.body
        const parameter_validation = TaskServices.taskValidation({ task_name, task_description, task_due_date_time, assign_user, status, task_created_user: id })
        if (parameter_validation) return CommonHelpers.ResponseHandler(res, 400, "Validation errors", parameter_validation)
        const new_task = new Task({ task_name, task_description, task_due_date_time, task_created_user: id, assign_user, status })
        new_task.save()
        return CommonHelpers.ResponseHandler(res, 201, "Successfully created new task")
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to create new task", error)
    }
}

export const update_task:RequestHandler=async(req,res)=>{
    try {
        const {task_id}=req.params
        const {status}=req.body
        if(!task_id) return CommonHelpers.ResponseHandler(res, 400, "Task id is required.")
        if(!status) return CommonHelpers.ResponseHandler(res, 400, "Status is required.")
        const task=await Task.findByIdAndUpdate(task_id,{status})
        if(task) return CommonHelpers.ResponseHandler(res, 200, "Sucessfully updated task")
        return CommonHelpers.ResponseHandler(res, 500, "Failed to update tasks")
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to update tasks", error)
    }
}

export const delete_task:RequestHandler=async(req,res)=>{
    try {
        const {task_id}=req.params
        if(!task_id) return CommonHelpers.ResponseHandler(res, 400, "Task id is required.")
        const task=await Task.findByIdAndDelete(task_id)
        if(task) return CommonHelpers.ResponseHandler(res, 200, "Sucessfully deleted task")
        return CommonHelpers.ResponseHandler(res, 500, "Failed to update tasks")
    } catch (error) {
        return CommonHelpers.ResponseHandler(res, 500, "Failed to update tasks", error)
    }
}