import { CreateworkConstants } from "../actions/constants";

const initialstate = {
  laoding: false,
  message: "",
  error: null,
  workcreated: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case CreateworkConstants.Createworkrequest: {
      state = {
        ...state,
        laoding: true,
      };
      break;
    }
    case CreateworkConstants.Createworksuccess: {
      state = {
        ...state,
        laoding: false,
        message: action.payload.message,
        workcreated: true,
      };
      break;
    }
    case CreateworkConstants.Createworkfailure: {
      state = {
        ...state,
        laoding: false,
        message: action.payload.message,
      };
    }
  }
  return state;
};
