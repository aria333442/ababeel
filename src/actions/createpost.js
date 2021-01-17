import axiosInstance from "../helper/Axios";
import { CreatepostConstants } from "./constants";

export const createPosts = (form) => {
  console.log(form);
  return async (dispatch) => {
    dispatch({ type: CreatepostConstants.Createpostrequest });
    await axiosInstance
      .post("https://ababeeel.herokuapp.com/api/createpost", form)
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          dispatch({
            type: CreatepostConstants.Createpostsuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: CreatepostConstants.Createpostfailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
