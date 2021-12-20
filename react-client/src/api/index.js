import axios from 'axios'


const registerUrl = "http://localhost:5000/register";
const loginUrl = "http://localhost:5000/login";


export const registerUser = (userData) => axios.post(registerUrl, userData).then(response => {console.log(response + "success")});
export const loginUser = (userData) => axios.post(loginUrl, userData);
export const getUser = () => axios.get("http://localhost:5000/").then(res => console.log(res))