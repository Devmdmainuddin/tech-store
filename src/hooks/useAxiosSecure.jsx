import axios from "axios"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})


const useAxiosSecure = () => {
    const {logOut}=useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use(
        res=>{
            return res
        },
        async error =>{
            console.log('Error from axiosSecure interceptors',error.response)
            if(error.response.status === 401)
        }
    )
    return (
        <div>
            
        </div>
    );
};

export default useAxiosSecure;