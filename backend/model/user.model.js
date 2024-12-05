import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.compare = async function (password){
   if(this.password === password)
   {
     return true
   }
   return false
}

export const User = mongoose.model("User",userSchema)