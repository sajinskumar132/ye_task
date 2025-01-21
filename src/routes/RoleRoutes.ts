import express from "express";
import { create_new_role, get_all_roles } from "../controllers/RoleController";
import { UserAuthentication } from "../middleware/UserAuthentication";

const role_routes=express.Router()

role_routes.get('/get_all_roles',UserAuthentication('Admin'),get_all_roles)
role_routes.post('/create_new_role',UserAuthentication('Admin'),create_new_role)

export default role_routes