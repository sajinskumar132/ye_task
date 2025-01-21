import express from "express";
import { create_new_status, get_all_status } from "../controllers/StatusController";
import { UserAuthentication } from "../middleware/UserAuthentication";

const status_routes=express.Router()
status_routes.get('/get_all_status',UserAuthentication('Admin'),get_all_status)
status_routes.post('/create_new_status',UserAuthentication('Admin'),create_new_status)

export default status_routes