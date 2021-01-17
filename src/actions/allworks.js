import { AllworksConstants } from "./constants";
import axios from "axios";

export const allwork = () => {
  return async (dispatch) => {
    dispatch({ type: AllworksConstants.allworksrequest });
    const res = await axios.get("https://ababeeel.herokuapp.com/api/allwork");
    if (res.status === 201) {
      const { works } = res.data;
      dispatch({
        type: AllworksConstants.allworkssuccess,
        payload: {
          works,
        },
      });
    } else if (res.status === 400) {
      dispatch({
        type: AllworksConstants.allworksfailure,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
