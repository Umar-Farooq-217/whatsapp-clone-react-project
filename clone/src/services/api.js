import axios from 'axios'
const url = 'http://localhost:8000'
export const addUser = async(data)=>{
    try {
     const response =  await  axios.post(`${url}/add`,data)
     console.log('add user', response.data);
     
    } catch (error) {
        console.log('error during add User',error);
        
    }
}
