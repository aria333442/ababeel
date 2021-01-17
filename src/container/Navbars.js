import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
import { logouts } from "../actions/login";
import Media from "react-media";
import { profiles } from "../actions/profile";
import socketIOClient from "socket.io-client";

function Navbars() {
  const user = localStorage.getItem("user");
  let user1 = JSON.parse(user);
  let socket;

  useEffect(() => {
    socket = socketIOClient("https://ababeeel.herokuapp.com", {
      query: `id=${user1._id}`,
    });
  }, []);

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logouts());
  };
  useEffect(() => {
    dispatch(profiles());
  }, []);
  const allusers = useSelector((state) => state.allusers);
  const profile = useSelector((state) => state.profile);
  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="row m-0 p-0 naw">
                <div className="col-1">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="bds">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-6 d-flex ">
                  <NavLink to="/user/profile" className="ssss ml-6">
                    Profile
                  </NavLink>
                  <NavLink to="/user/works" className="ssss">
                    Works
                  </NavLink>
                  <NavLink to="/inboxx" className="ssss">
                    Messaging
                  </NavLink>
                  <NavLink to="/" className="ssss">
                    Home
                  </NavLink>
                  {token ? (
                    <form onSubmit={logout}>
                      <button className="sssxc" type="submit">
                        Signout
                      </button>
                    </form>
                  ) : (
                    <NavLink to="/login" className="zash">
                      Signin
                    </NavLink>
                  )}
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <NavLink to="/" className="btn btn-primary ggfs ">
                    Start Hiring
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
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="row m-0 p-0 naw">
                <div className="col-1">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="bds">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-3 naomi">
                  <div class="dropdown">
                    <button
                      class="btnss  dropdown-toggle "
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
                      <NavLink to="/user/profile" className="dropdown-item">
                        Profile
                      </NavLink>
                      <NavLink to="/user/works" className="dropdown-item">
                        Works
                      </NavLink>
                      <NavLink to="/inboxx" className="dropdown-item">
                        Messaging
                      </NavLink>
                      <NavLink to="/" className="dropdown-item">
                        Home
                      </NavLink>
                      {token ? (
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
                    </div>
                  </div>
                </div>
                <div className="col-5 d-flex justify-content-end ml-auto">
                  <NavLink to="/" className="btn btn-primary ggfs ">
                    Start Hiring
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
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid m-0 p-0">
              <div className="row m-0 p-0 naw">
                <div className="col-1">
                  <NavLink to="/" className="mmmqq">
                    <h5 className="bds">Brand</h5>
                  </NavLink>
                </div>
                <div className="col-2 naomis">
                  <div class="dropdown">
                    <button
                      class="btnss  dropdown-toggle "
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
                      <NavLink to="/user/profile" className="dropdown-item">
                        Profile
                      </NavLink>
                      <NavLink to="/user/works" className="dropdown-item">
                        Works
                      </NavLink>
                      <NavLink to="/inboxx" className="dropdown-item">
                        Messaging
                      </NavLink>
                      <NavLink to="/" className="dropdown-item">
                        Home
                      </NavLink>
                      {token ? (
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
                      <NavLink to="/" className="dropdown-item">
                        Start Hiring
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-end ml-auto">
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
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Navbars;
