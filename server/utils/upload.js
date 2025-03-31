import multer from 'multer'
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from 'dotenv'
dotenv.config()

const URL = process.env.DATABASE_URL;
const storage = new GridFsStorage({
URL,
options : { useNewUrlParser: true },
file : (request , file)=>{
    const match = [ 'image/png' , 'image/jpg']
    if(match.indexOf(file.mimeType) === -1){
        return `${Date.now()}-file-${file.originalName}`
    }
    // in case of file
    return {
        bucketName : 'photos',
     fileName :  `${Date.now()}-file-${file.originalName}`
    }
}
})

export default multer({ storage })