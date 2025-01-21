import mongoose,{Schema} from "mongoose";

const RoleSchema=new Schema({
    role_name:{type:String,required:true},
    role_status:{type:Schema.Types.ObjectId,ref:"Status"}
},{timestamps:true})

export default mongoose.model('Roles',RoleSchema)