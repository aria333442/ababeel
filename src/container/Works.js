import React, { useEffect } from "react";
import Navbars from "./Navbars";
import "../css/works.css";
import { NavLink } from "react-router-dom";
import { BsCheckBox } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { userWork } from "../actions/userwork";
import Media from "react-media";

function Works() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const createworks = useSelector((state) => state.createworks);
  if (createworks.workcreated === true) {
    window.location.reload();
  }

  useEffect(() => {
    if (auth.authenticated === true) {
      window.location.reload();
    }
    dispatch(userWork());
  }, []);
  const userWorks = useSelector((state) => state.userWorks);
  return (
    <div>
      <Navbars />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <>
              <div className="container-fluid m-0 p-0 sswqa">
                <div className="row d-flex justify-content-center m-0 p-0">
                  <div className="col-9 llqq d-flex justify-content-between">
                    <p
                      style={{
                        fontSize: "30px",
                        fontFamily: "Helvetica",
                        fontStyle: "italic",
                      }}
                    >
                      Works
                    </p>
                    <NavLink
                      className="btn btn-primary wwqews"
                      to="/creatework"
                    >
                      Create new Work
                    </NavLink>
                  </div>
                </div>

                <div className="container-fluid m-0 p-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-9 ddcvss p-0">
                      <div className="diaa">
                        <h6 className="mt-3 ml-4">Active Works</h6>
                      </div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Work</th>
                            <th scope="col"></th>
                            <th scope="col">likes</th>
                            <th scope="col">clicks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userWorks.works.map((work) => {
                            return (
                              <tr>
                                <th scope="row">
                                  <BsCheckBox />
                                </th>
                                <td>
                                  <img
                                    src={work.images[0]}
                                    alt="card"
                                    className="imjss"
                                  ></img>
                                </td>
                                <td>
                                  <h6 className="ssssa">{work.Title}</h6>
                                </td>
                                <td>
                                  <p className="lkps">{work.likes}</p>
                                </td>
                                <td>
                                  <p className="plks">{work.clicks}</p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <>
              <div className="container-fluid m-0 p-0 sswqa">
                <div className="row d-flex justify-content-center">
                  <div className="col-11 llqq d-flex justify-content-between">
                    <p
                      style={{
                        fontSize: "30px",
                        fontFamily: "Helvetica",
                        fontStyle: "italic",
                      }}
                    >
                      Works
                    </p>
                    <NavLink
                      className="btn btn-primary wwqews"
                      to="/creatework"
                    >
                      Create new Work
                    </NavLink>
                  </div>
                </div>

                <div className="container-fluid m-0 p-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 ddcvss p-0">
                      <div className="diaa">
                        <h6 className="mt-3 ml-4">Active Works</h6>
                      </div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Work</th>
                            <th scope="col"></th>
                            <th scope="col">likes</th>
                            <th scope="col">clicks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userWorks.works.map((work) => {
                            return (
                              <tr>
                                <th scope="row">
                                  <BsCheckBox />
                                </th>
                                <td>
                                  <img
                                    src={work.images[0]}
                                    alt="card"
                                    className="imjss"
                                  ></img>
                                </td>
                                <td>
                                  <h6 className="ssssa">{work.Title}</h6>
                                </td>
                                <td>
                                  <p className="lkps">{work.likes}</p>
                                </td>
                                <td>
                                  <p className="plks">{work.clicks}</p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <>
              <div className="container-fluid m-0 p-0 sswqa">
                <div className="row d-flex justify-content-center">
                  <div className="col-11 llqq d-flex justify-content-between">
                    <p
                      style={{
                        fontSize: "30px",
                        fontFamily: "Helvetica",
                        fontStyle: "italic",
                      }}
                    >
                      Works
                    </p>
                    <NavLink
                      className="btn btn-primary wwqews"
                      to="/creatework"
                    >
                      Create new Work
                    </NavLink>
                  </div>
                </div>

                <div className="container-fluid m-0 p-0">
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 ddcvss p-0">
                      <div className="diaa">
                        <h6 className="mt-3 ml-4">Active Works</h6>
                      </div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Work</th>
                            <th scope="col">likes</th>
                            <th scope="col">clicks</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userWorks.works.map((work) => {
                            return (
                              <tr>
                                <th scope="row">
                                  <BsCheckBox />
                                </th>

                                <td>
                                  <h6 className="ssssa">{work.Title}</h6>
                                </td>
                                <td>
                                  <p className="lkps">{work.likes}</p>
                                </td>
                                <td>
                                  <p className="plks">{work.clicks}</p>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null;
        }}
      </Media>
    </div>
  );
}

export default Works;
