import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   sub:{
      type: String,
      required:true
   },
   picture: { type: String, required: true }, // ✅ Store image URL
 }, { timestamps: true }


)

const User = mongoose.model('users',userSchema)
export default User




