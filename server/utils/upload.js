import multer from 'multer'
import mongoose from 'mongoose'
import { GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'
dotenv.config()

 
const storage = new GridFsStorage({
url :process.env.DATABASE_URL ,
options : { useNewUrlParser: true },
file : (req , file)=>{
    const match = [ 'image/png' , 'image/jpg']
    if(match.indexOf(file.mimeType) === -1){
        return `${Date.now()}-file-${file.originalname}`
    }
    // in case of file
    return {
        bucketName : 'photos',
     fileName :  `${Date.now()}-file-${file.originalname}`
    }
}
})
export default  multer({storage});
