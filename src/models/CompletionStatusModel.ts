import mongoose ,{Schema} from "mongoose";

const CompletionStatusSchema=new Schema({
    completion_status_name:{type:String,required:true}
})

export default mongoose.model('Completion_Status',CompletionStatusSchema)