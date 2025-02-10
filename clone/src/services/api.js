import axios from 'axios'
export const addUser = async(data)=>{
    const url = 'http://localhost:8000'
    try {
     const response =  await  axios.post(`${url}/add`,data)
     console.log('add user', response.data);
     
    } catch (error) {
        console.log('error during add User',error);
        
    }
}