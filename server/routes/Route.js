import express from 'express'
import { addUser,getUsers } from '../controller/UserConroller.js';
import { newConversation , getConversation  } from '../controller/ConversatonsController.js';
import { newMessage , getMessage } from '../controller/message-conroller.js';

const router  = express.Router()
router.post('/add',addUser)
router.get('/users',getUsers)
router.post('/conversation/add',newConversation)
router.post('/conversation/get', getConversation)
router.post('/message/add', newMessage)
router.post('/message/get', getMessage)


export default router;