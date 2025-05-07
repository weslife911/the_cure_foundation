import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://the-cure-foundation.onrender.com/api",
    withCredentials: true
});