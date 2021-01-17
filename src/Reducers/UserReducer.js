import { UserConstants } from "../actions/constants";

const initialstate = {
  error: null,
  message: "",
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case UserConstants.UserSignupRequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case UserConstants.UserSignupSuccess: {
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      break;
    }
    case UserConstants.UserSignupFailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    }
  }
  return state;
};
