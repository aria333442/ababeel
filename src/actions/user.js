import { UserConstants } from "./constants";

import axios from "axios";
export const signups = (user) => {
  return async (dispatch) => {
    await axios
      .post("https://ababeeel.herokuapp.com/api/register", {
        ...user,
      })
      .then((res) => {
        const { message } = res.data;
        if (res.status === 201) {
          dispatch({
            type: UserConstants.UserSignupSuccess,
            payload: { message },
          });
        } else if (res.status === 200) {
          dispatch({
            type: UserConstants.UserSignupFailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
