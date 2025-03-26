import express from 'express'
import { addUser,getUsers } from '../controller/UserConroller.js';
import { newConversation , getConversation  } from '../controller/ConversatonsController.js';
import { newMessage , getMessage } from '../controller/message-conroller.js';
import { uploadFile } from '../controller/image-controller.js';
import upload from '../../server/utils/upload.js'

const router  = express.Router()
router.post('/add',addUser)
router.get('/users',getUsers)

router.post('/conversation/add',newConversation)
router.post('/conversation/get', getConversation)

router.post('/message/add', newMessage)
router.get('/message/get/:id', getMessage)

// for uploading images on mongodb in chunks form we use middleware which consists on three arguments
// why we use middleware , if you we want to perform any action before api calling


router.post('/file/upload',upload.single('file') , uploadFile)


export default router;