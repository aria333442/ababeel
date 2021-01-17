import axiosInstance from "../helper/Axios";
import { AllprofilesConstants } from "./constants";
import axios from "axios";

export const allprofile = () => {
  return async (dispatch) => {
    dispatch({ type: AllprofilesConstants.allprofilesrequest });
    const res = await axios.get(
      "https://ababeeel.herokuapp.com/api/allprofiles"
    );
    if (res.status === 201) {
      const { profiles } = res.data;
      dispatch({
        type: AllprofilesConstants.allprofilessuccess,
        payload: {
          profiles,
        },
      });
    } else if (res.status === 400) {
      dispatch({
        type: AllprofilesConstants.allprofilesfailure,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
