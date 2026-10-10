import mongoose from "mongoose";
import {v4} from "uuid"
const regSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    userId:String,
    email:String,
    name:String

})

const regColl = mongoose.model("registrationDetail",regSchema)

export default regColl