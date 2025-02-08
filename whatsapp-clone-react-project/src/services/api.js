import axios from 'axios'
export const addUser = async(data)=>{
    const url = 'http://localhost:3000'
    try {
     const response =  await  axios.post(`${url}/add`,data)
     console.log('add usr', response.data);
     
    } catch (error) {
        console.log('error ',error);
        
    }
}