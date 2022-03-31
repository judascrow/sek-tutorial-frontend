import axios from "axios"

const backend = process.env.VUE_APP_ENPOINT_API_BACKEND;

export default axios.create({
    baseURL: backend,
    headers: {
        "Content-type": "application/json",
    }
    
});