import React, { useState } from "react";
import { adminlogin } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { logins } from "../actions/login";
import Media from "react-media";

function Adminlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(adminlogin(user));
  };
  if (auth.message === "successfully login") {
    return <Redirect to="/admin/adminhome" />;
  }

  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttt">Brand</h2>
              <div className="row m-0 p-0">
                <div className=" pppppxss">
                  <h3 className="ssssx">Login</h3>
                  {auth.message ? (
                    <div class="alert alert-danger" role="alert">
                      {auth.message}
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <div className="aaaa"></div>
                  <form onSubmit={login}>
                    <div className="form-group">
                      <label for="email" className="ffff">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password" className="ffff">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputpassword1"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary bbbb">
                      Signin
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttta text-center">Brand</h2>
              <div className="row m-0 p-0 ">
                <div className="col-12 justify-content-center d-flex">
                  <div className=" pppppxs">
                    <h3 className="ssssx">Login</h3>
                    {auth.message ? (
                      <div class="alert alert-danger" role="alert">
                        {auth.message}
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <div className="aaaa"></div>
                    <form onSubmit={login}>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="ffff">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="Enter password"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary bbbb">
                        Signin
                      </button>
                    </form>
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
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttta text-center">Brand</h2>
              <div className="row m-0 p-0 ">
                <div className="col-12 justify-content-center d-flex">
                  <div className=" pppppxs">
                    <h3 className="ssssx">Login</h3>
                    {auth.message ? (
                      <div class="alert alert-danger" role="alert">
                        {auth.message}
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <div className="aaaa"></div>
                    <form onSubmit={login}>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="ffff">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="Enter password"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary bbbb">
                        Signin
                      </button>
                    </form>
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

export default Adminlogin;
