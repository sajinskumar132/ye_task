import mongoose ,{Schema, Types} from "mongoose";

const TaskSchema=new Schema({
    task_name:{type:String,required:true},
    task_description:{type:String,nullable:true},
    task_due_date_time:{type:String},
    task_created_user:{type:Schema.Types.ObjectId,ref:"User"},
    assign_user:{type:Schema.Types.ObjectId,ref:"User"},
    status:{type:Schema.Types.ObjectId,ref:"Completion_Status"}
},{timestamps:true})

export default mongoose.model('Task',TaskSchema)