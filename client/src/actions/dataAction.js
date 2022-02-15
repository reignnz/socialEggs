import axios from "axios"

export const createPost = (postData) => (dispatch) => {

    axios.post("http://localhost:3001/posts/createPost", postData)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error.response);
        })
    
} 

