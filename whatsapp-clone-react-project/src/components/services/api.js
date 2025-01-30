import axios from 'axios'

export const addUser = async({data})=>{
    const url = ''
    try {
      await  axios.post(url,data)
    } catch (error) {
        console.log('error ',error);
        
    }
}