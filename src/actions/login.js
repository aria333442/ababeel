import axiosInstance from "../helper/Axios";
import { AuthConstants } from "./constants";
import axios from "axios";

export const logins = (user) => {
  return async (dispatch) => {
    dispatch({ type: AuthConstants.Loginrequest });
    await axios
      .post("https://ababeeel.herokuapp.com/api/login", {
        ...user,
      })
      .then((res) => {
        if (res.status === 201) {
          const { token, user, message } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: AuthConstants.Loginsuccess,
            payload: {
              token,
              user,
              message,
            },
          });
        } else if (res.status === 200) {
          dispatch({
            type: AuthConstants.Loginfailure,
            payload: {
              message: res.data.message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
export const logouts = () => {
  return async (dispatch) => {
    dispatch({ type: AuthConstants.Logoutrequest });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const token = localStorage.getItem("token");
    if (token === null) {
      dispatch({
        type: AuthConstants.Logoutsuccess,
        payload: {
          message: "logout successfully",
        },
      });
    } else {
      dispatch({
        type: AuthConstants.Logoutfailure,
        payload: {
          message: "lgout failed",
        },
      });
    }
  };
};
export const isUserLoggedin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: AuthConstants.Loginsuccess,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: AuthConstants.Logoutfailure,
        payload: { message: "gand marao" },
      });
    }
  };
};
export const adminlogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: AuthConstants.Loginrequest });
    await axios
      .post("http://localhost:5000/api/adminlogin", {
        ...user,
      })
      .then((res) => {
        if (res.status === 201) {
          const { token, user, message } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: AuthConstants.Loginsuccess,
            payload: {
              token,
              user,
              message,
            },
          });
        } else if (res.status === 200) {
          dispatch({
            type: AuthConstants.Loginfailure,
            payload: {
              message: res.data.message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
