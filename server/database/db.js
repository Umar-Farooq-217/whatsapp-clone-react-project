import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    const URL = process.env.DATABSE_URL;

    try {
        await mongoose.connect(URL,
            { useNewUrlParser: true, }
        )
        console.log('Db is connected');

    } catch (error) {
        console.log('Error while Connection', error);

    }
}
export default Connection;