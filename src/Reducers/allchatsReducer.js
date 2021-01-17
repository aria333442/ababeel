import { AllchatsConstants } from "../actions/constants";

const initialstate = {
  chats: [],
  message: "",
  errro: null,
  laoding: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case AllchatsConstants.Allchatsrequest: {
      state = {
        ...state,
        laoding: true,
      };
      break;
    }
    case AllchatsConstants.Allchatssuccess: {
      state = {
        ...state,
        chats: action.payload.chats,
        laoding: false,
      };
      break;
    }
    case AllchatsConstants.Allchatsfailure: {
      state = {
        ...state,
        message: action.payload.message,
      };
      break;
    }
  }
  return state;
};
