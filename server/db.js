import mongoose from "mongoose";

const Connection = async()=>{
    try {
        await mongoose.connect()
        console.log('Db is connected');
        
    } catch (error) {
        console.log('Error while Connection',error);
        
    }
}
export default Connection;