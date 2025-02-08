import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async()=>{
    try {
        await mongoose.connect(URL,{usenifiedTopology:true})
        console.log('Db is connected');
        
    } catch (error) {
        console.log('Error while Connection',error);
        
    }
}
export default Connection;