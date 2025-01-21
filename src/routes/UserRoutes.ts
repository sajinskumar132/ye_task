import express from "express";
import { create_new_user, get_all_students, get_all_users, user_login } from "../controllers/UserController";
import { UserAuthentication } from "../middleware/UserAuthentication";


const user_routes=express.Router()

user_routes.get('/get_all_users',UserAuthentication('Admin'),get_all_users)
user_routes.get('/get_all_students',UserAuthentication('Admin'),get_all_students)

user_routes.post('/user_login',user_login)
user_routes.post('/create_new_user',UserAuthentication('Admin'),create_new_user)

export default user_routes