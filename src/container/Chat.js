import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../css/box.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allvonvo } from "../actions/allconvos";
import { profiles } from "../actions/profile";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { sendmessage } from "../actions/sendmessage";
import { alluser } from "../actions/allusers";
import { allChats } from "../actions";
import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from "react-scroll-to-bottom";
import Media from "react-media";

function Chat() {
  const scroll = useScrollToBottom();
  const [seconds, setseconds] = useState(0);
  const [sticky] = useSticky();
  const auth = useSelector((state) => state.auth);
  const [message, setmessage] = useState();
  const startConvo = useSelector((state) => state.startConvo);
  const token = localStorage.getItem("token");
  const { convoid, username } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const user1 = JSON.parse(user);
  if (!token) {
    history.push("/");
  }
  useEffect(() => {
    window.setInterval(() => {
      dispatch(allChats(convoid));
      setseconds(seconds + 1);
    }, 3000);
  }, []);
  useEffect(() => {
    dispatch(profiles());
    dispatch(allvonvo());
    dispatch(alluser());
  }, []);
  useEffect(() => {
    dispatch(allChats(convoid));
  }, [message]);

  const profile = useSelector((state) => state.profile);
  const allConvo = useSelector((state) => state.allConvo);
  const allusers = useSelector((state) => state.allusers);
  const chats = useSelector((state) => state.chats);
  const sendmessages = (e) => {
    e.preventDefault();
    dispatch(sendmessage(message, convoid));
    dispatch(allChats(convoid));
  };
  if (startConvo.message === "conversation started succesfully") {
    window.location.reload();
  }
  if (auth.authenticated === true) {
    window.location.reload();
  }
  return (
    <div>
      <Navbar />
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
                            <a
                              href={`/inbox/${convo.user1.username}/${convo._id}`}
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
                            </a>
                          );
                        } else if (
                          convo.user1._id === profile.profile.createdBy._id
                        ) {
                          return (
                            <a
                              href={`/inbox/${convo.user2.username}/${convo._id}`}
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
                            </a>
                          );
                        }
                      }
                    })}
                  </div>
                </div>
                <div className="col-8 pphhh">
                  <div className="mmmll">
                    {allusers.users.map((user) => {
                      if (user.username === username) {
                        return (
                          <div className="d-flex">
                            {user.online === true ? (
                              <div className="d-flex">
                                <img
                                  src={user.image}
                                  alt="prol"
                                  style={{
                                    height: "40px",
                                    borderRadius: "30px",
                                    marginTop: "5px",
                                    marginLeft: "20px",
                                  }}
                                ></img>
                                <div className="qazxi mt-3"></div>
                              </div>
                            ) : (
                              <div className="d-flex">
                                <img
                                  src={user.image}
                                  alt="prol"
                                  style={{
                                    height: "40px",
                                    borderRadius: "30px",
                                    marginTop: "5px",
                                    marginLeft: "20px",
                                  }}
                                ></img>
                                <div className="qazx mt-3"></div>
                              </div>
                            )}

                            <h4
                              style={{ marginLeft: "10px", marginTop: "7px" }}
                            >
                              {user.username}
                            </h4>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="pppii">
                    {chats.chats
                      .slice(0)
                      .reverse()
                      .map((chat) => {
                        if (user1) {
                          if (user1._id === chat.sender._id) {
                            return (
                              <div className="d-flex">
                                <img
                                  src={chat.sender.image}
                                  style={{
                                    height: "30px",
                                    borderRadius: "30px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                  }}
                                ></img>
                                <pre className="oorr">{chat.message}</pre>
                              </div>
                            );
                          } else {
                            return (
                              <div className="d-flex">
                                <img
                                  src={chat.sender.image}
                                  style={{
                                    height: "30px",
                                    borderRadius: "30px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                  }}
                                ></img>
                                <pre className="oorrr">{chat.message}</pre>
                              </div>
                            );
                          }
                        }
                      })}
                  </div>
                  <div>
                    <form onSubmit={sendmessages}>
                      <textarea
                        placeholder="message here"
                        type="text"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                        style={{
                          width: "80%",
                          height: "50px",
                          marginBottom: "0px",
                          marginTop: "39px",
                          border: "1px solid #cecece",
                          display: "inline block",
                        }}
                      ></textarea>
                      <button
                        className="btn btn-primary"
                        style={{
                          width: "20%",
                          height: "50px",
                          backgroundColor: "#1dbf73",
                          border: "none",
                          marginTop: "-45px",
                        }}
                        type="submit"
                        onClick={scroll}
                      >
                        send
                      </button>
                    </form>
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
            <div className="container-fluid ">
              <div className="d-flex justify-content-center">
                <div
                  className="row  mt-5"
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
                              <a
                                href={`/inbox/${convo.user1.username}/${convo._id}`}
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
                              </a>
                            );
                          } else if (
                            convo.user1._id === profile.profile.createdBy._id
                          ) {
                            return (
                              <a
                                href={`/inbox/${convo.user2.username}/${convo._id}`}
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
                              </a>
                            );
                          }
                        }
                      })}
                    </div>
                  </div>
                  <div className="col-8 pphhh">
                    <div className="mmmll">
                      {allusers.users.map((user) => {
                        if (user.username === username) {
                          return (
                            <div className="d-flex">
                              {user.online === true ? (
                                <div className="d-flex">
                                  <img
                                    src={user.image}
                                    alt="prol"
                                    style={{
                                      height: "40px",
                                      borderRadius: "30px",
                                      marginTop: "5px",
                                      marginLeft: "20px",
                                    }}
                                  ></img>
                                  <div className="qazxi mt-3"></div>
                                </div>
                              ) : (
                                <div className="d-flex">
                                  <img
                                    src={user.image}
                                    alt="prol"
                                    style={{
                                      height: "40px",
                                      borderRadius: "30px",
                                      marginTop: "5px",
                                      marginLeft: "20px",
                                    }}
                                  ></img>
                                  <div className="qazx mt-3"></div>
                                </div>
                              )}
                              <h4
                                style={{ marginLeft: "10px", marginTop: "7px" }}
                              >
                                {user.username}
                              </h4>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="pppii">
                      {chats.chats
                        .slice(0)
                        .reverse()
                        .map((chat) => {
                          if (user1) {
                            if (user1._id === chat.sender._id) {
                              return (
                                <div className="d-flex">
                                  <img
                                    src={chat.sender.image}
                                    style={{
                                      height: "30px",
                                      borderRadius: "30px",
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  ></img>
                                  <pre className="oorr">{chat.message}</pre>
                                </div>
                              );
                            } else {
                              return (
                                <div className="d-flex">
                                  <img
                                    src={chat.sender.image}
                                    style={{
                                      height: "30px",
                                      borderRadius: "30px",
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  ></img>
                                  <pre className="oorrr">{chat.message}</pre>
                                </div>
                              );
                            }
                          }
                        })}
                    </div>
                    <div>
                      <form onSubmit={sendmessages}>
                        <textarea
                          placeholder="message here"
                          type="text"
                          value={message}
                          onChange={(e) => setmessage(e.target.value)}
                          style={{
                            width: "80%",
                            height: "50px",
                            marginBottom: "0px",
                            marginTop: "39px",
                            border: "1px solid #cecece",
                            display: "inline block",
                          }}
                        ></textarea>
                        <button
                          className="btn btn-primary"
                          style={{
                            width: "20%",
                            height: "50px",
                            backgroundColor: "#1dbf73",
                            border: "none",
                            marginTop: "-45px",
                          }}
                          type="submit"
                          onClick={scroll}
                        >
                          send
                        </button>
                      </form>
                    </div>
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
                  className="row  mt-5"
                  style={{ boxShadow: " 0 0 10px 1px #eee", width: "730px" }}
                >
                  <div className="col-12 pphhhs">
                    <div className="mmmlls">
                      {allusers.users.map((user) => {
                        if (user.username === username) {
                          return (
                            <div className="d-flex">
                              {user.online === true ? (
                                <div className="d-flex">
                                  <img
                                    src={user.image}
                                    alt="prol"
                                    style={{
                                      height: "40px",
                                      borderRadius: "30px",
                                      marginTop: "5px",
                                      marginLeft: "20px",
                                    }}
                                  ></img>
                                  <div className="qazxi mt-3"></div>
                                </div>
                              ) : (
                                <div className="d-flex">
                                  <img
                                    src={user.image}
                                    alt="prol"
                                    style={{
                                      height: "40px",
                                      borderRadius: "30px",
                                      marginTop: "5px",
                                      marginLeft: "20px",
                                    }}
                                  ></img>
                                  <div className="qazx mt-3"></div>
                                </div>
                              )}
                              <h4
                                style={{ marginLeft: "10px", marginTop: "7px" }}
                              >
                                {user.username}
                              </h4>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="pppii">
                      {chats.chats
                        .slice(0)
                        .reverse()
                        .map((chat) => {
                          if (user1) {
                            if (user1._id === chat.sender._id) {
                              return (
                                <div className="d-flex">
                                  <img
                                    src={chat.sender.image}
                                    style={{
                                      height: "30px",
                                      borderRadius: "30px",
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  ></img>
                                  <pre className="oorr">{chat.message}</pre>
                                </div>
                              );
                            } else {
                              return (
                                <div className="d-flex">
                                  <img
                                    src={chat.sender.image}
                                    style={{
                                      height: "30px",
                                      borderRadius: "30px",
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  ></img>
                                  <pre className="oorrr">{chat.message}</pre>
                                </div>
                              );
                            }
                          }
                        })}
                    </div>
                    <div>
                      <form onSubmit={sendmessages}>
                        <textarea
                          placeholder="message here"
                          type="text"
                          value={message}
                          onChange={(e) => setmessage(e.target.value)}
                          style={{
                            width: "80%",
                            height: "50px",
                            marginBottom: "0px",
                            marginTop: "39px",
                            border: "1px solid #cecece",
                            display: "inline block",
                          }}
                        ></textarea>
                        <button
                          className="btn btn-primary"
                          style={{
                            width: "20%",
                            height: "50px",
                            backgroundColor: "#1dbf73",
                            border: "none",
                            marginTop: "-45px",
                          }}
                          type="submit"
                          onClick={scroll}
                        >
                          send
                        </button>
                      </form>
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

export default Chat;
