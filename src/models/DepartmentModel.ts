import mongoose ,{Schema} from "mongoose";

const DepartmentSchema=new Schema({
    user:{type:Schema.Types.ObjectId,ref:"User"},
    department_name:{type:String,required:true},
},{timestamps:true})

export default mongoose.model('Department',DepartmentSchema)