import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signups } from "../actions/user";
import { useHistory } from "react-router-dom";
import Media from "react-media";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user1 = {
      firstname,
      lastname,
      email,
      password,
      username,
    };
    dispatch(signups(user1));
  };
  if (user.message === "user created successfuly") {
    history.push("/login");
  }

  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid p-0 m-0 xxxx">
              <div className="row m-0 p-0">
                <div className="ppppp">
                  <h2 className="tttt">Brand</h2>
                  <h3 className="ssssx">Create account</h3>
                  {user.message ? (
                    <div class="alert alert-danger" role="alert">
                      {user.message}
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="firstname" className="ffff">
                        Firstname
                      </label>
                      <input
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        type="text"
                        name="firstname"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter firstname"
                      />
                    </div>
                    <div className="form-group">
                      <label for="lastname" className="ffff">
                        Lastname
                      </label>
                      <input
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        type="text"
                        name="lastname"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter lastname"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email" className="ffff">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        name="email"
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
                        name="password"
                        id="exampleInputpassword1"
                        aria-describedby="passwordHelp"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="form-group">
                      <label for="username" className="ffff">
                        Username
                      </label>
                      <input
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary bbbb">
                      Create your account
                    </button>
                  </form>
                  <p className="ffffg">
                    Already have account ? go to
                    <NavLink to="/login" className="gggf">
                      Login
                    </NavLink>
                  </p>
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
              <div className="row m-0 p-0">
                <div className="col-12 d-flex justify-content-center">
                  <div className="pppppp ">
                    <h2 className="tttt">Brand</h2>
                    <h3 className="ssssx">Create account</h3>
                    {user.message ? (
                      <div class="alert alert-danger" role="alert">
                        {user.message}
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div class="form-group">
                        <label for="firstname" className="ffff">
                          Firstname
                        </label>
                        <input
                          value={firstname}
                          onChange={(e) => setfirstname(e.target.value)}
                          type="text"
                          name="firstname"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter firstname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="lastname" className="ffff">
                          Lastname
                        </label>
                        <input
                          value={lastname}
                          onChange={(e) => setlastname(e.target.value)}
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter lastname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          name="email"
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
                          name="password"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="username" className="ffff">
                          Username
                        </label>
                        <input
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary bbbb">
                        Create your account
                      </button>
                    </form>
                    <p className="ffffg">
                      Already have account ? go to
                      <NavLink to="/login" className="gggf">
                        Login
                      </NavLink>
                    </p>
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
              <div className="row m-0 p-0">
                <div className="col-12 d-flex justify-content-center">
                  <div className="pppppp ">
                    <h2 className="tttt">Brand</h2>
                    <h3 className="ssssx">Create account</h3>
                    {user.message ? (
                      <div class="alert alert-danger" role="alert">
                        {user.message}
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div class="form-group">
                        <label for="firstname" className="ffff">
                          Firstname
                        </label>
                        <input
                          value={firstname}
                          onChange={(e) => setfirstname(e.target.value)}
                          type="text"
                          name="firstname"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter firstname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="lastname" className="ffff">
                          Lastname
                        </label>
                        <input
                          value={lastname}
                          onChange={(e) => setlastname(e.target.value)}
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter lastname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
                          name="email"
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
                          name="password"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="username" className="ffff">
                          Username
                        </label>
                        <input
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Enter username"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary bbbb">
                        Create your account
                      </button>
                    </form>
                    <p className="ffffg">
                      Already have account ? go to
                      <NavLink to="/login" className="gggf">
                        Login
                      </NavLink>
                    </p>
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

export default Register;
