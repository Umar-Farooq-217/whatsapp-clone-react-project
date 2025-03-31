import express from 'express'
import { addUser,getUsers } from '../controller/UserConroller.js';
import { newConversation , getConversation  } from '../controller/ConversatonsController.js';
import { newMessage , getMessage } from '../controller/message-conroller.js';
import { uploadFile } from '../controller/image-controller.js';
// import upload from '../../server/utils/upload.js'

const router  = express.Router()
router.post('/add',addUser)
router.get('/users',getUsers)

router.post('/conversation/add',newConversation)
router.post('/conversation/get', getConversation)

router.post('/message/add', newMessage)
router.get('/message/get/:id', getMessage)

// for uploading images on mongodb in chunks form we use middleware which consists on three arguments
// why we use middleware , if you we want to perform any action before api calling
// 1-MULTER PACKAGE   npm i multer => multer is a node.js middleware for handling multipart/formData ,
// which is primarily used for uploading file . 
// 2-Multer-GRIDFS-STORAGE   npm i multer-gridfs-storage
// multer-gridfs-storage engine for multer to store uploaded files directly from mongodb.

// router.post('/file/upload',upload.single('file') , uploadFile)
router.post('/file/upload', uploadFile)


export default router;