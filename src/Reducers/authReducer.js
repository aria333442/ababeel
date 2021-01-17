import { AuthConstants } from "../actions/constants";

const intitialstate = {
  token: null,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    _id: "",
    username: "",
  },
  message: "",
  error: null,
  authenticating: false,
  authenticated: false,
};

export default (state = intitialstate, action) => {
  switch (action.type) {
    case AuthConstants.Loginrequest: {
      state = {
        ...state,
        authenticating: true,
      };
      break;
    }
    case AuthConstants.Loginsuccess: {
      state = {
        ...state,
        authenticated: true,
        authenticating: false,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
      };
      break;
    }
    case AuthConstants.Loginfailure: {
      state = {
        ...state,
        authenticating: false,
        authenticated: false,
        message: action.payload.message,
      };
      break;
    }
    case AuthConstants.Logoutsuccess: {
      state = {
        ...intitialstate,
      };
    }
  }
  return state;
};
