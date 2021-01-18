import React, { useEffect } from "react";
import "../css/box.css";
import { useDispatch, useSelector } from "react-redux";
import { allvonvo } from "../actions/allconvos";
import { profiles } from "../actions/profile";
import { NavLink, useHistory } from "react-router-dom";
import Media from "react-media";
import Navbars from "./Navbars";

function Boxe() {
  const auth = useSelector((state) => state.auth);
  const startConvo = useSelector((state) => state.startConvo);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const dispatch = useDispatch();
  if (!token) {
    history.push("/");
  }
  useEffect(() => {
    dispatch(profiles());
    dispatch(allvonvo());
  }, []);
  const profile = useSelector((state) => state.profile);
  const allConvo = useSelector((state) => state.allConvo);
  if (startConvo.message === "conversation started succesfully") {
    window.location.reload();
  }
  if (auth.authenticated === true) {
    window.location.reload();
  }
  return (
    <div>
      <Navbars />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid ">
              <div
                className="row ml-5 mt-5"
                style={{ boxShadow: " 0 0 10px 1px #eee", width: "1000px" }}
              >
                <div className="col-4 pphh p-0">
                  <div className="mmmll">
                    <h5
                      style={{
                        marginTop: "10px",
                        marginLeft: "20px",
                        color: "#1dbf73",
                        fontFamily: "helvetica",
                        fontWeight: "600",
                      }}
                    >
                      All conversations
                    </h5>
                  </div>
                  <div className="pppiii">
                    {allConvo.convos.map((convo) => {
                      if (
                        convo.user2._id === profile.profile.createdBy._id ||
                        convo.user1._id === profile.profile.createdBy._id
                      ) {
                        if (convo.user2._id === profile.profile.createdBy._id) {
                          return (
                            <NavLink
                              to={`/inbox/${convo.user1.username}/${convo._id}`}
                            >
                              <div className="asdfg">
                                {convo.user1.online === true ? (
                                  <div className="d-flex">
                                    <img
                                      src={convo.user1.image}
                                      alt="prof"
                                      className="aswer"
                                    ></img>
                                    <div className="qazxi mt-3"></div>
                                  </div>
                                ) : (
                                  <div className="d-flex">
                                    <img
                                      src={convo.user1.image}
                                      alt="prof"
                                      className="aswer"
                                    ></img>
                                    <div className="qazx mt-3"></div>
                                  </div>
                                )}

                                <h5
                                  style={{
                                    marginLeft: "20px",
                                    marginTop: "18px",
                                  }}
                                >
                                  {convo.user1.username}
                                </h5>
                              </div>
                            </NavLink>
                          );
                        } else if (
                          convo.user1._id === profile.profile.createdBy._id
                        ) {
                          return (
                            <NavLink
                              to={`/inbox/${convo.user2.username}/${convo._id}`}
                            >
                              <div className="asdfg">
                                {convo.user2.online === true ? (
                                  <div className="d-flex">
                                    <img
                                      src={convo.user2.image}
                                      alt="prof"
                                      className="aswer"
                                    ></img>
                                    <div className="qazxi mt-3"></div>
                                  </div>
                                ) : (
                                  <div className="d-flex">
                                    <img
                                      src={convo.user2.image}
                                      alt="prof"
                                      className="aswer"
                                    ></img>
                                    <div className="qazx mt-3"></div>
                                  </div>
                                )}
                                <h5
                                  style={{
                                    marginLeft: "20px",
                                    marginTop: "18px",
                                  }}
                                >
                                  {convo.user2.username}
                                </h5>
                              </div>
                            </NavLink>
                          );
                        }
                      }
                    })}
                  </div>
                </div>
                <div className="col-8 pphhh">
                  <div className="pppii">
                    <h4
                      style={{
                        marginLeft: "150px",
                        marginTop: "190px",
                        color: "green",
                        fontWeight: "800",
                        fontFamily: "helvetica",
                      }}
                    >
                      No conversation selected
                    </h4>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid ">
              <div className="d-flex justify-content-center">
                <div
                  className="row ml-2 mt-5 d-flex justify-content-center"
                  style={{ boxShadow: " 0 0 10px 1px #eee", width: "730px" }}
                >
                  <div className="col-4 pphh p-0">
                    <div className="mmmll">
                      <h5
                        style={{
                          marginTop: "10px",
                          marginLeft: "20px",
                          color: "#1dbf73",
                          fontFamily: "helvetica",
                          fontWeight: "600",
                        }}
                      >
                        All conversations
                      </h5>
                    </div>
                    <div className="pppiii">
                      {allConvo.convos.map((convo) => {
                        if (
                          convo.user2._id === profile.profile.createdBy._id ||
                          convo.user1._id === profile.profile.createdBy._id
                        ) {
                          if (
                            convo.user2._id === profile.profile.createdBy._id
                          ) {
                            return (
                              <NavLink
                                to={`/inbox/${convo.user1.username}/${convo._id}`}
                              >
                                <div className="asdfg">
                                  {convo.user1.online === true ? (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user1.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazxi mt-3"></div>
                                    </div>
                                  ) : (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user1.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazx mt-3"></div>
                                    </div>
                                  )}

                                  <h5
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "18px",
                                    }}
                                  >
                                    {convo.user1.username}
                                  </h5>
                                </div>
                              </NavLink>
                            );
                          } else if (
                            convo.user1._id === profile.profile.createdBy._id
                          ) {
                            return (
                              <NavLink
                                to={`/inbox/${convo.user2.username}/${convo._id}`}
                              >
                                <div className="asdfg">
                                  {convo.user2.online === true ? (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user2.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazxi mt-3"></div>
                                    </div>
                                  ) : (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user2.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazx mt-3"></div>
                                    </div>
                                  )}

                                  <h5
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "18px",
                                    }}
                                  >
                                    {convo.user2.username}
                                  </h5>
                                </div>
                              </NavLink>
                            );
                          }
                        }
                      })}
                    </div>
                  </div>
                  <div className="col-8 pphhh">
                    <div className="pppii">
                      <h4
                        style={{
                          marginLeft: "150px",
                          marginTop: "190px",
                          color: "green",
                          fontWeight: "800",
                          fontFamily: "helvetica",
                        }}
                      >
                        No conversation selected
                      </h4>
                    </div>
                    <div></div>
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
            <div className="container-fluid ">
              <div className="d-flex justify-content-center">
                <div
                  className="row  mt-3 d-flex justify-content-center"
                  style={{ width: "730px" }}
                >
                  <div className="col-12 pphhs p-0">
                    <div className="mmmlls">
                      <h5
                        style={{
                          marginTop: "10px",
                          marginLeft: "30px",
                          color: "#1dbf73",
                          fontFamily: "helvetica",
                          fontWeight: "600",
                        }}
                      >
                        All conversations
                      </h5>
                    </div>
                    <div className="pppiii">
                      {allConvo.convos.map((convo) => {
                        if (
                          convo.user2._id === profile.profile.createdBy._id ||
                          convo.user1._id === profile.profile.createdBy._id
                        ) {
                          if (
                            convo.user2._id === profile.profile.createdBy._id
                          ) {
                            return (
                              <NavLink
                                to={`/inbox/${convo.user1.username}/${convo._id}`}
                              >
                                <div className="asdfg">
                                  {convo.user1.online === true ? (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user1.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazxi mt-3"></div>
                                    </div>
                                  ) : (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user1.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazx mt-3"></div>
                                    </div>
                                  )}

                                  <h5
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "18px",
                                    }}
                                  >
                                    {convo.user1.username}
                                  </h5>
                                </div>
                              </NavLink>
                            );
                          } else if (
                            convo.user1._id === profile.profile.createdBy._id
                          ) {
                            return (
                              <NavLink
                                to={`/inbox/${convo.user2.username}/${convo._id}`}
                              >
                                <div className="asdfg">
                                  {convo.user2.online === true ? (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user2.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazxi mt-3"></div>
                                    </div>
                                  ) : (
                                    <div className="d-flex">
                                      <img
                                        src={convo.user2.image}
                                        alt="prof"
                                        className="aswer"
                                      ></img>
                                      <div className="qazx mt-3"></div>
                                    </div>
                                  )}

                                  <h5
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "18px",
                                    }}
                                  >
                                    {convo.user2.username}
                                  </h5>
                                </div>
                              </NavLink>
                            );
                          }
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Boxe;
