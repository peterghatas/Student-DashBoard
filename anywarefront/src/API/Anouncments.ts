import axios from "axios";
const api="http://localhost:8000"

export const getAllAnnouncements=async()=>{
    const response=await axios.get(`${api}/getAnnouncements`)
    
      return response.data
}