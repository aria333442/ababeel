import { StartconvoConstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case StartconvoConstants.Startconvorequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case StartconvoConstants.Startconvosuccess: {
      state = {
        ...state,
        loading: false,
        profilecreated: true,
        message: action.payload.message,
      };
      break;
    }
    case StartconvoConstants.Startconvofailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
