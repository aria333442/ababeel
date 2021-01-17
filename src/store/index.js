import { applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
