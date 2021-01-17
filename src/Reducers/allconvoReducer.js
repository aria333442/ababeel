import { AllconvoConstants } from "../actions/constants";

const initialstate = {
  convos: [],
  message: "",
  error: null,
  loading: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case AllconvoConstants.Allconvorequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case AllconvoConstants.Allconvosuccess: {
      state = {
        ...state,
        convos: action.payload.convos,
        laoding: false,
      };
      break;
    }
    case AllconvoConstants.Allconvofailure: {
      state = {
        ...state,
        message: action.payload.message,
      };
    }
  }
  return state;
};
