import { AllusersConstants } from "../actions/constants";
import axios from "axios";
export const alluser = () => {
  return async (dispatch) => {
    dispatch({ type: AllusersConstants.allusersrequest });
    const res = await axios.get("https://ababeeel.herokuapp.com/api/allusers");
    if (res.status === 201) {
      const { users } = res.data;
      dispatch({
        type: AllusersConstants.alluserssuccess,
        payload: {
          users,
        },
      });
    } else if (res.status === 400) {
      dispatch({
        type: AllusersConstants.allusersfailure,
        payload: { error: res.data.error },
      });
    }
  };
};
