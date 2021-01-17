import { WorkbyidConstants } from "../actions/constants";

const initialstate = {
  work: {
    Title: "",
    description: "",
    price: "",
    images: [],
    createdBy: {
      _id: "",
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      works: "",
    },
    profileId: {
      _id: "",
      profileTitle: "",
      description: "",
      from: "",
      category: "",
      createdBy: "",
      profileimage: "",
    },
  },
  loading: false,
  message: "",
  error: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case WorkbyidConstants.Workbyidrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case WorkbyidConstants.Workbyidsuccess: {
      state = {
        ...state,
        work: action.payload.work,
        loading: false,
      };
      break;
    }
    case WorkbyidConstants.Workbyidfailure: {
      state = {
        ...state,
        message: action.payload.message,
      };
    }
  }
  return state;
};
