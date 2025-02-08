import express, { Router } from 'express' 
import Connection from './database/db.js';
import Route from './routes/Route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
Connection()


 const app = express()
 app.use('/',Route)
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))


const PORT = 8000;
 app.listen(PORT , ()=> console.log('server is running')
 )