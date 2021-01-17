import { ProfileConstants } from "../actions/constants";

const initialstate = {
  profile: {
    profileTitle: "",
    description: "",
    from: "",
    category: "",
    profileimage: "",
    createdBy: "",
    languages: [],
    responceTime: "",
    createdBy: {
      _id: "",
      firstname: "",
      lastname: "",
      email: "",
      username: "",
    },
  },
  message: "",
  loading: false,
  error: null,
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case ProfileConstants.Profilerequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case ProfileConstants.Profilesuccess: {
      state = {
        ...state,
        loading: false,
        profile: action.payload.profile,
      };
      break;
    }
    case ProfileConstants.Profilefailure: {
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
