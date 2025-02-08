import express from 'express'

const Route  = express.Router()
Route.post('/add',()=>{console.log('end point');
})

export default Route;