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
return response.data
    } catch (error) {
        console.log('error by api getUsers ', error);
      
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


export const newMessage = async(data)=>{
    try {
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
     console.log('error while newMessage Api ', error.message);
        
    }
}



export const getMessage = async(id)=>{
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
       return response.data
        
    } catch (error) {
        console.log('error while getMessage Api ', error.message);

    }
}

export const uploadFile = async(data)=>{
    try {
        return await axios.post(`${url}/file/upload` , data)
    } catch (error) {
        console.log('error while uploadFile Api ', error.message);
    }
}