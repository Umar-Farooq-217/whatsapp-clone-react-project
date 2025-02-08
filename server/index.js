import express, { Router } from 'express' 
import Connection from './database/db.js';
import router from './routes/Route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
Connection()


 const app = express()
 app.use(cors())
 app.use(express.json())
 app.use(bodyParser.json({extended:true}))
 app.use(bodyParser.urlencoded({extended:true}))
 
 app.post('/add', (req, res) => {
    console.log('Received Data:', req.body);  // Debugging
    res.status(200).json({ message: 'User added successfully' });
});

const PORT = 8000;
 app.listen(PORT , async () => {
    await Connection();
    console.log(`Server is running on port ${PORT}`);
})
 