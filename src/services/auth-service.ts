import api from "../helpers/api-helper";
import TokenService from "./token-service";

const register = (username: any, email: any, password: any) => {
  return api.post("/auth/signup", {
    username,
    email,
    password,
  });
};

const login = (username: any, password: any) => {
  return api
    .post("/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") ?? "");
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
