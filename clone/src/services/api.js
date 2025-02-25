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
export const getUsers = async()=>{
    try {
let response = await axios.get(`${url}/users`)
console.log('response by api ', response);

console.log('getUsers ' , response);

return response.data

    } catch (error) {
        console.log('error by api ', error);
       
    }
}

export const newConversation =async(data)=>{
    try {
        let response = await axios.post(`${url}/conversation/add`,data)
        console.log('newConversation' , response);
        
    } catch (error) {
        console.log('error during newConversation', error);
        
    }
}
export const getConversation =async(data)=>{
    try {
        let response = await axios.post(`${url}/conversation/get`,data)
        return response.data
        
    } catch (error) {
        console.log('error during getConversation', error);
        
    }
}