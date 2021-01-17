import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { search } from "../actions";
import Navbar from "./Navbar";
import Media from "react-media";

function Searchresults() {
  const dispatch = useDispatch();
  const searches = useSelector((state) => state.searches);
  const history = useHistory();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let query1 = query.get("query");
  useEffect(() => {
    dispatch(search(query1));
  }, [query1]);

  return (
    <>
      <Navbar />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div>
              <div className="container-fluid m-0 p-0">
                <h2 className="mt-5 ml-5">Showing results for {query1}</h2>
                {searches.success === true ? (
                  <div className="row m-0 p-0">
                    {searches.works.map((ser) => {
                      return (
                        <div className="col-3">
                          <div
                            className="carda"
                            style={{ marginLeft: "35px", marginTop: "30px" }}
                          >
                            <img
                              src={ser.images[1].img}
                              alt="card"
                              className="imjh"
                            ></img>
                            <div className="info d-flex ">
                              {ser.createdBy.online === true ? (
                                <div className="d-flex">
                                  <img
                                    src={ser.profileId.profileimage}
                                    alt="profile"
                                    className="ilk"
                                  ></img>
                                  <div className="qazxi mt-3"></div>
                                </div>
                              ) : (
                                <div className="d-flex">
                                  <img
                                    src={ser.profileId.profileimage}
                                    alt="profile"
                                    className="ilk"
                                  ></img>
                                  <div className="qazx mt-3"></div>
                                </div>
                              )}

                              <h6 className="d-block prof">
                                {ser.createdBy.username}
                              </h6>
                            </div>
                            <div className="d-flex">
                              <p className="data">{ser.Title}</p>
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
                                ${ser.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <h1>{searches.message}</h1>
                )}
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div>
              <div className="container-fluid m-0 p-0">
                <h2 className="mt-5 ml-5">Showing results for {query1}</h2>
                {searches.success === true ? (
                  <div className="row m-0 p-0">
                    {searches.works.map((ser) => {
                      return (
                        <div className="col-4 d-flex justify-content-center">
                          <div
                            className="carda"
                            style={{ marginLeft: "35px", marginTop: "30px" }}
                          >
                            <img
                              src={ser.images[1].img}
                              alt="card"
                              className="imjh"
                            ></img>
                            <div className="info d-flex ">
                              <img
                                src={ser.profileId.profileimage}
                                alt="profile"
                                className="ilk"
                              ></img>
                              <h6 className="d-block prof">
                                {ser.createdBy.username}
                              </h6>
                            </div>
                            <div className="d-flex">
                              <p className="data">{ser.Title}</p>
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
                                ${ser.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <h1>{searches.message}</h1>
                )}
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div>
              <div className="container-fluid m-0 p-0">
                <h3 className="mt-5 ml-5">Showing results for {query1}</h3>
                {searches.success === true ? (
                  <div className="row m-0 p-0">
                    {searches.works.map((ser) => {
                      return (
                        <div className="col-12 d-flex justify-content-center m-0 p-0">
                          <div
                            className="carda"
                            style={{ marginLeft: "35px", marginTop: "30px" }}
                          >
                            <img
                              src={ser.images[1].img}
                              alt="card"
                              className="imjh"
                            ></img>
                            <div className="info d-flex ">
                              <img
                                src={ser.profileId.profileimage}
                                alt="profile"
                                className="ilk"
                              ></img>
                              <h6 className="d-block prof">
                                {ser.createdBy.username}
                              </h6>
                            </div>
                            <div className="d-flex">
                              <p className="data">{ser.Title}</p>
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
                                ${ser.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <h1>{searches.message}</h1>
                )}
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Searchresults;
