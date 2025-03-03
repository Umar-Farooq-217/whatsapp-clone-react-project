import express from 'express'
import { addUser,getUsers } from '../controller/UserConroller.js';
import { newConversation , getConversation  } from '../controller/ConversatonsController.js';

const router  = express.Router()
router.post('/add',addUser)
router.get('/users',getUsers)
router.post('/conversation/add',newConversation)
router.post('/conversation/get', getConversation)


export default router;