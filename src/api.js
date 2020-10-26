import axios from "axios"

const Base_Api = "https://enigmatic-everglades-76189.herokuapp.com"


const api = axios.create({
    baseURL : Base_Api,
    timeout : 10000
});

export function calculateGross(data){
    return api.post("/",data)
}