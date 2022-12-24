import axios from "axios";

const API_URL = "http://localhost:8000/";

const register = (fullName, email, password) => {
  return axios.post(API_URL + "user/registration", {
    fullName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accesToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
