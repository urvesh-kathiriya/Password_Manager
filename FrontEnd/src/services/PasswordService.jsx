import axios from 'axios';
const api_url = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: api_url,

})


export const getPasswordService = async () => {
    try {
        const response = await api.get("/password/")
        
        if(response.data.statusCode===200){
            return response.data.data
        }
        else {
            throw new Error("Failed to fetch password data",response.data)
        }
        
    } catch (error) {
        console.error("Error in getPasswordService:", error);
        throw error; // Rethrow the error to be handled by the calling function
        
    }
}

export const createPasswordService = async(form)=>{
    try {
        console.log(form)
        const response = await api.post("/password/",form)
        if(response.data.statusCode===201){
            return response.data
        }
        else {
            throw new Error("Failed to create password",response.data)
        }
        
    } catch (error) {
        console.error("Error in createPasswordService:", error);
        throw error; // Rethrow the error to be handled by the calling function
        
    }

}
export const deletePasswordService = async(id)=>{

    try {
        const response = await api.delete(`/password/${id}`,)
        if(response.data.statusCode===201){
            return response.data
        }
        else {
            throw new Error("Failed to delete password",response.data)
        }
        
    } catch (error) {
        console.error("Error in deletePasswordService:", error);
        throw error; // Rethrow the error to be handled by the calling function
        
    }

}
