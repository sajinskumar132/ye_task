import mongoose ,{Schema} from "mongoose";

const StatusSchema=new Schema({
    status_name:{type:String,required:true}
})

export default mongoose.model('Status',StatusSchema)