import { SearchConstants } from "../actions/constants";

const initialstate = {
  works: [],
  message: "",
  loading: false,
  errror: null,
  success: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SearchConstants.Searchrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case SearchConstants.Searchsuccess: {
      state = {
        ...state,
        works: action.payload.works,
        loading: false,
        success: true,
      };
      break;
    }
    case SearchConstants.Searchfailure: {
      state = {
        ...state,
        message: action.payload.message,
      };
      break;
    }
  }
  return state;
};
