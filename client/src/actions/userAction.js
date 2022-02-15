import axios from 'axios'
import jsonwebtoken from 'jsonwebtoken'

export const loginUser = (userData, history) => (dispatch) => {
    axios.post("http://localhost:3001/users/login", userData)
    .then(response => {
        // response.data.token is the token 
        console.log(response);

        const idToken = response.data.token;
        const user = jsonwebtoken.verify(idToken, 'RESTFULapi'); 

        localStorage.setItem('IdToken', idToken);
        axios.defaults.headers.common['Authorization'] = idToken;

        dispatch({
            type: "LOGIN_USER",
            payload: response.data      
        });

        history.push('/home');
    })
    .catch(error => {
        console.log(error.response);
    })
}