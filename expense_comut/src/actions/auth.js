import {USER_LOGGED_IN,USER_LOGGED_OUT,USER_REGISTERED} from "../types";
import api from "../api";


export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type:USER_LOGGED_OUT
});

export const userRegistered = (user) =>({
  type:USER_REGISTERED
})

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then(user => {
    localStorage.expenseUserToken = user.token;
    dispatch(userLoggedIn(user))
  });

export const registerAuth = (registerData) => (dispatch) =>
  api.user.registerApi(registerData).then(user => {
      dispatch(userRegistered(user))
  })




export const logout = () => dispatch => {
  localStorage.removeItem("expenseUserToken");
  dispatch(userLoggedOut());
};
