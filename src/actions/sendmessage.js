import axiosInstance from "../helper/Axios";
import { SendmessageConstants } from "./constants";

export const sendmessage = (message, convoid) => {
  return async (dispatch) => {
    dispatch({
      type: SendmessageConstants.Sendmessagerequest,
    });
    await axiosInstance
      .post(`https://ababeeel.herokuapp.com/api/sendmessage/${convoid}`, {
        message,
      })
      .then((res) => {
        const { message } = res.data;
        if (res.status === 201) {
          dispatch({
            type: SendmessageConstants.Sendmessagesuccess,
            payload: {
              message,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: SendmessageConstants.Sendmessagefailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
