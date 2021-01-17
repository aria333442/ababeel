import { AllworksConstants } from "../actions/constants";

const initialstate = {
  loading: false,
  message: "",
  works: [],
  error: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case AllworksConstants.allworksrequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case AllworksConstants.allworkssuccess: {
      state = {
        ...state,
        loading: false,
        works: action.payload.works,
      };
      break;
    }
    case AllworksConstants.allworksfailure: {
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
  }
  return state;
};
