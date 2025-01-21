import express from "express";
import status_routes from "./StatusRoutes";
import role_routes from "./RoleRoutes";
import user_routes from "./UserRoutes";
import completion_status_routes from "./CompletionStatusRoutes";
import task_routes from "./TaskRoutes";


const routes=express.Router()

routes.use('/completion_status',completion_status_routes)

routes.use('/status',status_routes)

routes.use('/roles',role_routes)

routes.use('/users',user_routes)

routes.use('/tasks',task_routes)
export default routes