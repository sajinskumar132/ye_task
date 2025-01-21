import express from "express";
import { create_new_completion_status, get_all_completion_status } from "../controllers/CompletionStatusController";
import { UserAuthentication } from "../middleware/UserAuthentication";


const completion_status_routes=express.Router()
completion_status_routes.get('/get_all_completion_status',UserAuthentication('Admin'),get_all_completion_status)
completion_status_routes.post('/create_new_completion_status',UserAuthentication('Admin'),create_new_completion_status)

export default completion_status_routes