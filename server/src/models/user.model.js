import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    userId:String,
    email:String,
    name:String

})

const regColl = mongoose.model("registrationDetail",regSchema)

export default regColl