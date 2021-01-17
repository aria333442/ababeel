import { SendmessageConstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SendmessageConstants.Sendmessagerequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case SendmessageConstants.Sendmessagesuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    }
    case SendmessageConstants.Sendmessagefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
