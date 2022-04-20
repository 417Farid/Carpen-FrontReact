const API_URL =  "http://127.0.0.1:8000/companies/"

export const userConected = async ()=>{
     return await fetch(API_URL);
};