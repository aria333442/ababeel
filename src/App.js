import { Route, Router, Switch } from "react-router-dom";
import Home from "./container/Home";
import Login from "../src/container/Login";
import Profile from "./container/Profile";
import Register from "./container/Register";
import userprofile from "./container/Userprofile";
import Works from "./container/Works";
import CreateProfile from "./container/CreateProfile";
import Userwork from "./container/Userwork";
import category from "./container/category";
import Searchresults from "./container/Searchresults";
import Creatework from "./container/Creatework";
import Box from "./container/Box";
import Chat from "./container/Chat";
import userprofile1 from "./container/Userprofilee";
import Boxe from "./container/Boxe";
import Chats from "./container/Chats";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import AdminHome from "./container/AdminHome";
import Adminlogin from "./container/Adminlogin";
import AdminBox from "./container/adminBox";
import AdminChat from "./container/AdminChat";
import Adminprofile from "./container/Adminprofile";
import Adminuserwork from "./container/Adminuserwork";
import Adminblog from "./container/Adminblog";
function App() {
  const user = localStorage.getItem("user");
  let user1 = JSON.parse(user);
  const allusers = useSelector((state) => state.allusers);
  let socket;

  useEffect(() => {
    if (user1) {
      socket = socketIOClient("https://ababeeel.herokuapp.com", {
        query: `id=${user1._id}`,
      });
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin/adminhome" component={AdminHome}></Route>
        <Route exact path="/user/profile" component={userprofile}></Route>
        <Route path="/user/works" component={Works}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/adminlogin" component={Adminlogin}></Route>
        <Route path="/user/profile/:userid" component={Profile}></Route>
        <Route
          path="/admin/user/profile/:userid"
          component={Adminprofile}
        ></Route>
        <Route path="/createprofile" component={CreateProfile}></Route>
        <Route path="/user/work/:workid" component={Userwork}></Route>
        <Route
          path="/admin/user/work/:workid"
          component={Adminuserwork}
        ></Route>
        <Route path="/category/:name" component={category}></Route>
        <Route path="/work" component={Searchresults}></Route>
        <Route path="/creatework" component={Creatework}></Route>
        <Route exact path="/inbox" component={Box}></Route>
        <Route path="/inbox/:username/:convoid" component={Chat}></Route>
        <Route
          path="/admin/inbox/:username/:convoid"
          component={AdminChat}
        ></Route>
        <Route path="/profile" component={userprofile1}></Route>
        <Route exact path="/inboxx" component={Boxe}></Route>
        <Route path="/inboxx/:username/:convoid" component={Chats}></Route>
        <Route path="/admin/inbox" component={AdminBox}></Route>
        <Route path="/admin/createblog" component={Adminblog}></Route>
      </Switch>
    </>
  );
}

export default App;
