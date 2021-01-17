import { combineReducers } from "redux";
import UserReducer from "../Reducers/UserReducer";
import authReducer from "../Reducers/authReducer";
import allusersReducer from "./allusersReducer";
import allworkReducer from "./allworkReducer";
import allprofilesReducer from "./allprofilesReducer";
import profilebyidReducer from "./profilebyidReducer";
import createprofileReducer from "./createprofileReducer";
import profileReducer from "./profileReducer";
import workbyidReducer from "./workbyidReducer";
import userworkReducer from "./userworkReducer";
import searchReducer from "./searchReducer";
import createworkReducer from "./createworkReducer";
import startconvoReducer from "./startconvoReducer";
import allconvoReducer from "./allconvoReducer";
import sendmessageReducer from "./sendmessageReducer";
import allchatsReducer from "./allchatsReducer";
import createpostReducer from "./createpostReducer";

const RootReducer = combineReducers({
  user: UserReducer,
  auth: authReducer,
  allusers: allusersReducer,
  allworks: allworkReducer,
  allprofiles: allprofilesReducer,
  profilebyid: profilebyidReducer,
  createprofile: createprofileReducer,
  profile: profileReducer,
  workbyId: workbyidReducer,
  userWorks: userworkReducer,
  searches: searchReducer,
  createworks: createworkReducer,
  startConvo: startconvoReducer,
  allConvo: allconvoReducer,
  sendMessage: sendmessageReducer,
  chats: allchatsReducer,
  createpostss: createpostReducer,
});

export default RootReducer;
