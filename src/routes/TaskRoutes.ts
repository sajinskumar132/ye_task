import express from "express";
import { create_new_task, delete_task, get_tasks, update_task } from "../controllers/TaskController";
import { UserAuthentication } from "../middleware/UserAuthentication";


const task_routes=express.Router()

task_routes.get('/get_tasks',UserAuthentication(null),get_tasks)
task_routes.post('/create_new_task',UserAuthentication('Admin'),create_new_task)
task_routes.put('/:task_id/update_task_status',UserAuthentication(null),update_task)
task_routes.delete('/:task_id/delete_task',UserAuthentication('Admin'),delete_task)

export default task_routes