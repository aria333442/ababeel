import { UserworkConstants } from "../actions/constants";

const initialstate = {
  works: [],
  lading: false,
  message: "",
  error: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case UserworkConstants.Userworkrequest: {
      state = {
        ...state,
        laoding: true,
      };
      break;
    }
    case UserworkConstants.Userworksuccess: {
      state = {
        ...state,
        works: action.payload.works,
        laoding: false,
      };
      break;
    }
    case UserworkConstants.Userworkfailure: {
      state = {
        ...state,
        lading: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
