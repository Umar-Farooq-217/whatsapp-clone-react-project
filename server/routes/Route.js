import express from 'express'
import { addUser,getUsers } from '../controller/UserConroller.js';

const router  = express.Router()
router.post('/add',addUser)
router.get('/users',getUsers)

export default router;