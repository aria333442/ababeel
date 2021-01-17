import { CreatepostConstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  postcreated: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case CreatepostConstants.Createpostrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case CreatepostConstants.Createpostsuccess: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        postcreated: true,
      };
      break;
    }
    case CreatepostConstants.Createpostfailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
