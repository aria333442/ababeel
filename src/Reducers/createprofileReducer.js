import { CreateprofileConstants } from "../actions/constants";

const initialstate = {
  message: "",
  error: null,
  loading: false,
  profilecreated: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case CreateprofileConstants.Createprofilerequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case CreateprofileConstants.Createprofilesuccess: {
      state = {
        ...state,
        loading: false,
        profilecreated: true,
        message: action.payload.message,
      };
      break;
    }
    case CreateprofileConstants.Createprofilefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
