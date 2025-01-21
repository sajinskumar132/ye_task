import express  from "express";
import {config} from "dotenv"
import { DatabaseConnection } from "./connections/DatabaseConnection";
import routes from "./routes/Routes";
config()


const app= express()
app.use(express.json())

app.use(`/ye_task/${process.env.API_VERSION}/`,routes)

DatabaseConnection.DbConnection(process.env.MONGODB_URI||null).then((response)=>{
    console.log(response)
    app.listen(process.env.PORT,()=>{
        console.log("server started")
    })
}).catch((error)=>{
    console.log(error)
})

