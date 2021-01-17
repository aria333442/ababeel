import { AllusersConstants } from "../actions/constants";

const initialstate = {
  users: [],
  loading: false,
  error: null,
  message: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case AllusersConstants.allusersrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case AllusersConstants.alluserssuccess: {
      state = {
        ...state,
        loading: false,
        users: action.payload.users,
      };
      break;
    }
    case AllusersConstants.allusersfailure: {
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    }
  }
  return state;
};
