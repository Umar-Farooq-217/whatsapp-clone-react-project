import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
iss:{
    type:String,
},
aud:{
    type:String,
},
azp:{
    type:String,
},
email:{
    type:String,
},
email_verified:{type:Boolean},
exp:{
   type: Number
},
name:{
   type: String,
   required:true
},
iss:{
   type: String
},
picture:{
   type: String,
   required:true
},
sub:{
   type: String,
   required:true
},
iat:{
    type: Number
 },
nbf:{
    type: Number
 },
})

const User = mongoose.model('users',userSchema)
export default User




