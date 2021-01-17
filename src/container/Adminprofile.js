import React, { useEffect } from "react";
import "../css/profile.css";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allwork, profilebyId, startconvos } from "../actions";
import Media from "react-media";
import AdminNavbar from "./AdminNavbar";

function Adminprofile() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { userid } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(profilebyId(userid));
    dispatch(allwork());
  }, []);

  const profilebyid = useSelector((state) => state.profilebyid);
  const allworks = useSelector((state) => state.allworks);
  const convo = () => {
    dispatch(startconvos(profilebyid.profile.createdBy._id));
  };
  const startConvo = useSelector((state) => state.startConvo);
  if (startConvo.message === "conversation started succesfully") {
    history.push("/admin/adminhome");
  }
  if (token === null) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <AdminNavbar />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="d-flex cont">
              <div className="cont1">
                <p className="heart">
                  <AiFillHeart />
                </p>
                {profilebyid.profile.createdBy.online === true ? (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxis mt-4"></div>
                  </div>
                ) : (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxs mt-4"></div>
                  </div>
                )}

                <h3 className="names">
                  {profilebyid.profile.createdBy.username}
                </h3>
                <p className="wwe">{profilebyid.profile.profileTitle}</p>
                <div className="row">
                  <button className="bhg" onClick={convo}>
                    Contact me
                  </button>
                  <button className="bgh">Hire Me</button>
                </div>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profilebyid.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profilebyid.profile.responceTime}Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profilebyid.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <h5 className="dis">Description</h5>
                  <p className="di">{profilebyid.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <h5 className="dis">Languages</h5>
                  {profilebyid.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <h5 className="dis">Categories</h5>
                  <button className="cat">
                    {profilebyid.profile.category}
                  </button>
                </div>
              </div>
              <div className="cont2">
                <h3 className="sss">
                  {profilebyid.profile.createdBy.username} Work
                </h3>
                <div className="row">
                  {allworks.works.map((work) => {
                    if (
                      work.createdBy._id === profilebyid.profile.createdBy._id
                    ) {
                      return (
                        <div className="col-6 mt-3">
                          <>
                            <NavLink
                              to={`/user/work/${work._id}`}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
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
                            </NavLink>
                          </>
                        </div>
                      );
                    }
                  })}
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
                {profilebyid.profile.createdBy.online === true ? (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxis mt-4"></div>
                  </div>
                ) : (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxs mt-4"></div>
                  </div>
                )}
                <h3 className="names">
                  {profilebyid.profile.createdBy.username}
                </h3>
                <p className="wwe">{profilebyid.profile.profileTitle}</p>
                <div className="row">
                  <button className="bhg" onClick={convo}>
                    Contact me
                  </button>
                  <button className="bgh">Hire Me</button>
                </div>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profilebyid.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profilebyid.profile.responceTime}Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profilebyid.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <h5 className="dis">Description</h5>
                  <p className="di">{profilebyid.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <h5 className="dis">Languages</h5>
                  {profilebyid.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <h5 className="dis">Categories</h5>
                  <button className="cat">
                    {profilebyid.profile.category}
                  </button>
                </div>
              </div>
              <div className="cont22">
                <h3 className="sss text-center">
                  {profilebyid.profile.createdBy.username} Work
                </h3>
                <div className="row">
                  {allworks.works.map((work) => {
                    if (
                      work.createdBy._id === profilebyid.profile.createdBy._id
                    ) {
                      return (
                        <div className="col-12 mt-3 d-flex justify-content-center">
                          <>
                            <NavLink
                              to={`/user/work/${work._id}`}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
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
                            </NavLink>
                          </>
                        </div>
                      );
                    }
                  })}
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
                {profilebyid.profile.createdBy.online === true ? (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxis mt-4"></div>
                  </div>
                ) : (
                  <div className="d-flex">
                    <img
                      src={profilebyid.profile.profileimage}
                      alt="profile"
                      className="imj"
                    ></img>
                    <div className="qazxs mt-4"></div>
                  </div>
                )}
                <h3 className="names">
                  {profilebyid.profile.createdBy.username}
                </h3>
                <p className="wwe">{profilebyid.profile.profileTitle}</p>
                <div className="row">
                  <button className="bhg" onClick={convo}>
                    Contact me
                  </button>
                  <button className="bgh">Hire Me</button>
                </div>
                <div className="cone"></div>
                <div className="d-flex justify-content-between">
                  <p className="dsw">From</p>
                  <p className="swd">{profilebyid.profile.from}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Avg. Responce time</p>
                  <p className="swde">{profilebyid.profile.responceTime}Hr</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="dswe">Email adress</p>
                  <p className="swde">{profilebyid.profile.createdBy.email}</p>
                </div>
                <div className="fdaq">
                  <h5 className="dis">Description</h5>
                  <p className="di">{profilebyid.profile.description}</p>
                  <div className="lines mt-4"></div>
                  <h5 className="dis">Languages</h5>
                  {profilebyid.profile.languages.map((lang) => {
                    return <p className="aaa">{lang}</p>;
                  })}

                  <div className="lines mt-4"></div>
                  <h5 className="dis">Categories</h5>
                  <button className="cat">
                    {profilebyid.profile.category}
                  </button>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Adminprofile;
