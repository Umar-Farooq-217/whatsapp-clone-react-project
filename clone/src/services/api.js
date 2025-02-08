import axios from 'axios'
export const addUser = async(data)=>{
    const url = 'http://localhost:3000'
    try {
     const response =  await  axios.post(`${url}/add`,data, {
        headers: { 'Content-Type': 'application/json' } 
    })
     console.log('add user', response.data);
     
    } catch (error) {
        console.log('error during add User',error);
        
    }
}