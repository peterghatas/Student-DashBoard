import axios from "axios";
const api="http://localhost:8000"

export const getAllQuizesAPI=async()=>{
    const response=await axios.get(`${api}/GetQuizzes`)
    
      return response.data
}