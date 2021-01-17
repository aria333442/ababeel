import React, { useEffect } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import Navbars from "../container/Navbars";
import { profiles } from "../actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { allwork } from "../actions";
import Media from "react-media";

function Userprofile() {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  if (!token) {
    history.push("/login");
  }
  useEffect(() => {
    if (token) {
      dispatch(profiles());
      dispatch(allwork());
    }
  }, []);

  const profile = useSelector((state) => state.profile);
  const allworks = useSelector((state) => state.allworks);

  if (profile.message === "dont have profile") {
    history.push("/createprofile");
  }
  return (
    <>
      <Navbars />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex cont">
              <div className="cont1">
                <p className="heart">
                  <AiFillHeart />
                </p>
                {profile.profile.createdBy.online === true ? (
                  <div className="d-flex">
                    <img
                      src={profile.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxi mt-4"></div>
                  </div>
                ) : (
                  <div className="d-flex">
                    <img
                      src={profile.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazx mt-4"></div>
                  </div>
                )}

                <h3 className="names">{profile.profile.createdBy.username}</h3>
                <p className="wwe">{profile.profile.profileTitle}</p>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profile.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profile.profile.responceTime} Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profile.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="diss">Description</h5>
                    <p className="disst">Edit description</p>
                  </div>
                  <p className="di">{profile.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Languages</h5>
                    <p className="disst">Add New</p>
                  </div>
                  {profile.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Categories</h5>
                    <p className="disst">Add New</p>
                  </div>
                  <button className="cat">{profile.profile.category}</button>
                </div>
              </div>
              <div className="cont2">
                <div className="ssaa">
                  <h3 className="sss mt-2">Active Work</h3>
                </div>
                <div className="row">
                  {allworks.works.map((work) => {
                    if (work.createdBy._id === profile.profile.createdBy._id) {
                      return (
                        <div className="col-6 mt-3">
                          <>
                            <div className="carda">
                              <img
                                src={work.images[0]}
                                alt="card"
                                className="imjh"
                              ></img>
                              <div className="info d-flex ">
                                <img
                                  src={work.profileId.profileimage}
                                  alt="profile"
                                  className="ilk"
                                ></img>
                                <h6 className="d-block prof">
                                  {work.createdBy.username}
                                </h6>
                              </div>
                              <div className="d-flex">
                                <p className="data">{work.Title}</p>
                              </div>
                              <div className="d-flex ends m-0 p-0">
                                <p
                                  className="ml-3 ste"
                                  style={{ color: "yellowGreen" }}
                                >
                                  <AiFillStar />
                                  <p
                                    className="d-inline ml-2"
                                    style={{
                                      color: "yellowGreen",
                                      fontWeight: 700,
                                      fontSize: "15px",
                                    }}
                                  >
                                    5.0
                                  </p>
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h6
                                  className="ml-3"
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontWeight: 600,
                                    marginTop: "10px",
                                    color: "yellowgreen",
                                  }}
                                >
                                  Starting price
                                </h6>
                                <p
                                  className="mr-3 mt-2"
                                  style={{ fontWeight: 700 }}
                                >
                                  ${work.price}
                                </p>
                              </div>
                            </div>
                          </>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="nww">
                  <NavLink className="btn btn-primary hhhgg" to="#">
                    Create new Work
                  </NavLink>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex cont11 justify-content-center">
              <div className="cont1">
                <p className="heart">
                  <AiFillHeart />
                </p>
                {profile.profile.createdBy.online === true ? (
                  <div className="d-flex">
                    {profile.profile.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={profile.profile.profileimage}
                          alt="profile"
                          className="imj"
                        ></img>
                        <div className="qazxi mt-4"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={profile.profile.profileimage}
                          alt="profile"
                          className="imj"
                        ></img>
                        <div className="qazx mt-4"></div>
                      </div>
                    )}
                    <div className="qazxi mt-4"></div>
                  </div>
                ) : (
                  <div className="d-flex">
                    <img
                      src={profile.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazx mt-4"></div>
                  </div>
                )}
                <h3 className="names">{profile.profile.createdBy.username}</h3>
                <p className="wwe">{profile.profile.profileTitle}</p>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profile.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profile.profile.responceTime} Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profile.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="diss">Description</h5>
                    <p className="disst">Edit description</p>
                  </div>
                  <p className="di">{profile.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Languages</h5>
                    <p className="disst">Add New</p>
                  </div>
                  {profile.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Categories</h5>
                    <p className="disst">Add New</p>
                  </div>
                  <button className="cat">{profile.profile.category}</button>
                </div>
              </div>
              <div className="cont22">
                <div className="ssaa">
                  <h3 className="sss mt-2 text-center">Active Work</h3>
                </div>
                <div className="row">
                  {allworks.works.map((work) => {
                    if (work.createdBy._id === profile.profile.createdBy._id) {
                      return (
                        <div className="col-12 mt-3 d-flex justify-content-center">
                          <>
                            <div className="carda">
                              <img
                                src={work.images[0]}
                                alt="card"
                                className="imjh"
                              ></img>
                              <div className="info d-flex ">
                                <img
                                  src={work.profileId.profileimage}
                                  alt="profile"
                                  className="ilk"
                                ></img>
                                <h6 className="d-block prof">
                                  {work.createdBy.username}
                                </h6>
                              </div>
                              <div className="d-flex">
                                <p className="data">{work.Title}</p>
                              </div>
                              <div className="d-flex ends m-0 p-0">
                                <p
                                  className="ml-3 ste"
                                  style={{ color: "yellowGreen" }}
                                >
                                  <AiFillStar />
                                  <p
                                    className="d-inline ml-2"
                                    style={{
                                      color: "yellowGreen",
                                      fontWeight: 700,
                                      fontSize: "15px",
                                    }}
                                  >
                                    5.0
                                  </p>
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <h6
                                  className="ml-3"
                                  style={{
                                    fontFamily: "Helvetica",
                                    fontWeight: 600,
                                    marginTop: "10px",
                                    color: "yellowgreen",
                                  }}
                                >
                                  Starting price
                                </h6>
                                <p
                                  className="mr-3 mt-2"
                                  style={{ fontWeight: 700 }}
                                >
                                  ${work.price}
                                </p>
                              </div>
                            </div>
                          </>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="nww">
                  <NavLink className="btn btn-primary hhhgg" to="#">
                    Create new Work
                  </NavLink>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex cont112 justify-content-center">
              <div className="cont12">
                <p className="heart">
                  <AiFillHeart />
                </p>
                <img
                  src={profile.profile.profileimage}
                  alt="profile"
                  className="imj"
                ></img>
                <h3 className="names">{profile.profile.createdBy.username}</h3>
                <p className="wwe">{profile.profile.profileTitle}</p>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profile.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profile.profile.responceTime} Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profile.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="diss">Description</h5>
                    <p className="disst">Edit description</p>
                  </div>
                  <p className="di">{profile.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Languages</h5>
                    <p className="disst">Add New</p>
                  </div>
                  {profile.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <div className="d-flex justify-content-between">
                    <h5 className="dis">Categories</h5>
                    <p className="disst">Add New</p>
                  </div>
                  <button className="cat">{profile.profile.category}</button>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Userprofile;
