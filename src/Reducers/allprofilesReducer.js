import { AllprofilesConstants } from "../actions/constants";

const initialstate = {
  profiles: [],
  loading: false,
  error: null,
  message: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case AllprofilesConstants.allprofilesrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case AllprofilesConstants.allprofilessuccess: {
      state = {
        ...state,
        loading: false,
        profiles: action.payload.profiles,
      };
      break;
    }
    case AllprofilesConstants.allprofilesfailure: {
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
