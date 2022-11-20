/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const BASE_URL = 'http://localhost:8000/'

const login = ({email, password}) =>{
    axios
        .post(BASE_URL + 'auth/login', {email, password})
        .then((res) => {
            const { accessToken } = res.data
            if(accessToken) {
                localStorage.setItem("user", accessToken)
            } else {
                return "login failed"
            }
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

export default {
    login,
    logout
}


