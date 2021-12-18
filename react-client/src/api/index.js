import axios from 'axios'


const url = "http://localhost:5000/register";

export const registerUser = (userData) => axios.post(url, userData).then(response => {console.log(response + "success")});
export const getUser = () => axios.get("http://localhost:5000/").then(res => console.log(res))