import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { logouts } from "../actions/login";
import Media from "react-media";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { profiles } from "../actions/profile";
import socketIOClient from "socket.io-client";
function Navbar() {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [query, setquery] = useState();
  const allusers = useSelector((state) => state.allusers);
  const logout = () => {
    dispatch(logouts());
  };
  const user = localStorage.getItem("user");
  let user1 = JSON.parse(user);

  useEffect(() => {
    if (token) {
      dispatch(profiles());
    }
  }, []);
  const profile = useSelector((state) => state.profile);
  let Categories = [
    { value: "webdevelopement", label: "web development" },
    { value: "Logodesigning", label: "Logo designing" },
    { value: "wordpress", label: "word press" },
    { value: "MernStack", label: "Mern stack" },
    { value: "Gamedevelopment ", label: "Game development" },
    { value: "Seo ", label: "Seo" },

    {
      value: "mobileappsdev",
      label: "mobile apps dev",
    },
    { value: "socialmedia", label: "Social media" },
  ];
  let newCategories = [
    { value: "webdevelopement", label: "web development" },
    { value: "Logodesigning", label: "Logo designing" },
    { value: "wordpress", label: "word press" },
    { value: "MernStack", label: "Mern stack" },
    { value: "Seo ", label: "Seo" },
  ];
  const location = useLocation();

  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0 fds">
              <div className="row navv m-0 p-0">
                <div className="col-1">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-5">
                  <form>
                    <input
                      placeholder="Search"
                      className="searchBar"
                      onChange={(e) => setquery(e.target.value)}
                      value={query}
                    />
                    <NavLink className="xds" to={`/work?query=${query}`}>
                      Search
                    </NavLink>
                  </form>
                </div>
                <div className="col-6 d-flex justify-content-around">
                  <NavLink to="/" className="zasw">
                    Home
                  </NavLink>
                  <NavLink to="/inbox" className="zas">
                    Messaging
                  </NavLink>
                  {location.pathname === "/inbox" ||
                  location.pathname ===
                    "/inbox/:username/:convoid" ? null : token ? (
                    <form onSubmit={logout}>
                      <button className="qqqq" type="submit">
                        Signout
                      </button>
                    </form>
                  ) : (
                    <NavLink to="/login" className="zas">
                      Signin
                    </NavLink>
                  )}
                  <NavLink to="/profile" className="zas">
                    Profile
                  </NavLink>
                  <div className="sssa">
                    <NavLink to="/user/profile" className="btn btn-primary ggf">
                      Start Working
                    </NavLink>
                  </div>
                  <div className="d-flex">
                    {profile.profile.profileimage ? (
                      <img
                        src={profile.profile.profileimage}
                        alt="profile"
                        className="ikls"
                      ></img>
                    ) : (
                      <img
                        src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg"
                        alt="profile"
                        className="ikls"
                      ></img>
                    )}
                    {profile.profile.createdBy.online === true ? (
                      <div className="qazxi mt-4"></div>
                    ) : (
                      <div className="qazx mt-4"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="navv2 z4">
                <ul>
                  {Categories.map((cat) => {
                    return (
                      <li>
                        <NavLink className="xx" to={`/category/${cat.value}`}>
                          {cat.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0 fds">
              <div className="row navv m-0 p-0">
                <div className="col-1">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-7">
                  <form>
                    <input
                      placeholder="Search"
                      className="searchBars"
                      onChange={(e) => setquery(e.target.value)}
                      value={query}
                    />
                    <NavLink className="xds" to={`/work?query=${query}`}>
                      Search
                    </NavLink>
                  </form>
                </div>
                <div className="col-4 d-flex justify-content-around pl-0 pr-0 ml-0 mr-0">
                  <div class="dropdown">
                    <button
                      class="btns  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Links
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <NavLink class="dropdown-item" to="/">
                        Home
                      </NavLink>
                      <NavLink class="dropdown-item" to="/inbox">
                        messaging
                      </NavLink>
                      <NavLink class="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                      {location.pathname === "/inbox" ||
                      location.pathname ===
                        "/inbox/:username/:convoid" ? null : token ? (
                        <form onSubmit={logout}>
                          <button className="qqqq" type="submit">
                            Signout
                          </button>
                        </form>
                      ) : (
                        <NavLink to="/login" className="dropdown-item">
                          Signin
                        </NavLink>
                      )}
                    </div>
                  </div>
                  <NavLink to="/user/profile" className="koja">
                    Start Working
                  </NavLink>

                  <div className="d-flex">
                    {profile.profile.profileimage ? (
                      <img
                        src={profile.profile.profileimage}
                        alt="profile"
                        className="ikls"
                      ></img>
                    ) : (
                      <img
                        src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg"
                        alt="profile"
                        className="ikls"
                      ></img>
                    )}
                    {allusers.users.map((us) => {
                      if (us._id === user1._id) {
                        return us.online === true ? (
                          <div className="qazxi mt-4"></div>
                        ) : (
                          <div className="qazx mt-4"></div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="navv2 z4">
                <ul>
                  {newCategories.map((cat) => {
                    return (
                      <li>
                        <NavLink className="xx" to={`/category/${cat.value}`}>
                          {cat.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="row navvs m-0 p-0">
                <div className="col-3 ml-0 pl-0">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-9 d-flex justify-content-end pl-0 pr-0 ml-0 mr-0">
                  <div class="dropdown">
                    <button
                      class="btnss  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Links
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <NavLink class="dropdown-item" to="/">
                        Home
                      </NavLink>
                      <NavLink class="dropdown-item" to="/inbox">
                        messaging
                      </NavLink>
                      <NavLink class="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                      {location.pathname === "/inbox" ||
                      location.pathname ===
                        "/inbox/:username/:convoid" ? null : token ? (
                        <form onSubmit={logout}>
                          <button className="dropdown-item" type="submit">
                            Signout
                          </button>
                        </form>
                      ) : (
                        <NavLink to="/login" className="dropdown-item">
                          Signin
                        </NavLink>
                      )}
                      <NavLink to="/user/profile" className="koja">
                        Start Working
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <form>
                    <input
                      placeholder="Search"
                      className="searchBarss"
                      onChange={(e) => setquery(e.target.value)}
                      value={query}
                    />
                    <NavLink className="xds" to={`/work?query=${query}`}>
                      Search
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Navbar;
