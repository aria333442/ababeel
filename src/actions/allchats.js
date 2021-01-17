import axiosInstance from "../helper/Axios";
import { AllchatsConstants } from "../actions/constants";
export const allChats = (convoid) => {
  return async (dispatch) => [
    dispatch({
      type: AllchatsConstants.Allchatsrequest,
    }),
    await axiosInstance
      .get(`https://ababeeel.herokuapp.com/api/allmessage/${convoid}`)
      .then((res) => {
        const { chats } = res.data;
        if (res.status === 201) {
          dispatch({
            type: AllchatsConstants.Allchatssuccess,
            payload: {
              chats,
            },
          });
        } else if (res.status === 200) {
          const { message } = res.data;
          dispatch({
            type: AllchatsConstants.Allchatsfailure,
            payload: {
              message,
            },
          });
        }
      })
      .catch((error) => {}),
  ];
};
