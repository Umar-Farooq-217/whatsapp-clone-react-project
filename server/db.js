import mongoose from "mongoose";

const Connection = async()=>{
    try {
        
        console.log('Db is connected');
        
    } catch (error) {
        console.log('Error while Connection',error);
        
    }
}
export default Connection;