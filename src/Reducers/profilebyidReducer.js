import { ProfilebyidConstants } from "../actions/constants";

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
  loading: false,
  error: null,
  message: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case ProfilebyidConstants.Profilebyidrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case ProfilebyidConstants.Profilebyidsuccess: {
      state = {
        ...state,
        loading: false,
        profile: action.payload.profile,
      };
      break;
    }
    case ProfilebyidConstants.Profilebyidfailure: {
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
