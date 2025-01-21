import mongoose ,{Schema} from "mongoose";

const UserSchema=new Schema({
    user_name:{type:String,required:true},
    email_id:{type:String,required:true,unique: true},
    password:{type:String,required:true},
    user_role:{type:Schema.Types.ObjectId,ref:"Roles", required: true},
    user_status:{type:Schema.Types.ObjectId,ref:"Status", required: true},
},{timestamps:true})

export default mongoose.model('User',UserSchema)