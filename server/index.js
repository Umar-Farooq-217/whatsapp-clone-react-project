import express from 'express' 
import Connection from './database/db.js';
Connection()

 const app = express()

const PORT = 8000;
 app.listen(PORT , ()=> console.log('server is running')
 )