import React, { useEffect } from "react";
import "../css/home.css";
import { NavLink, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../container/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { alluser } from "../actions/allusers";
import { allwork } from "../actions/allworks";
import { allprofile } from "../actions";
import Media from "react-media";

function Category() {
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(alluser());
    dispatch(allwork());
    dispatch(allprofile());
  }, []);
  const allusers = useSelector((state) => state.allusers);
  const allworks = useSelector((state) => state.allworks);
  const allprofiles = useSelector((state) => state.allprofiles);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          marginRight: "20px",
          backgroundColor: "none",
          color: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "gray",
          background: "gray",
          marginLeft: "-10px",
          backgroundColor: "none",
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {};
  return (
    <>
      <Navbar />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid">
              <div className="row ">
                {allusers.users.map((user) => {
                  if (user.category === name) {
                    console.log(user.Category, name);
                    if (user.works > 0) {
                      if (user.works <= 4) {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: user.works,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      } else {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      }
                      return (
                        <div className="col-11 ml-5 dsa p-3">
                          <div className="row">
                            <h4 className="d-inline-block ml-4">
                              Work by
                              {
                                <NavLink to="#" className="link">
                                  {user.username}
                                </NavLink>
                              }
                            </h4>
                            <NavLink
                              className="btn btn-primary sssds ml-auto mr-4 mt-0 d-inline-block"
                              to={`/user/profile/${user._id}`}
                            >
                              Hire
                            </NavLink>
                          </div>
                          <div className="mt-3">
                            <Slider {...settings}>
                              {allworks.works.map((work) => {
                                if (work.createdBy._id === user._id) {
                                  return (
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
                                            src={work.images[1].img}
                                            alt="card"
                                            className="imjh"
                                          ></img>
                                          <div className="info d-flex ">
                                            {allprofiles.profiles.map(
                                              (profile) => {
                                                if (
                                                  profile.createdBy._id ===
                                                  user._id
                                                ) {
                                                  return profile.createdBy
                                                    .online === true ? (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazxi mt-3"></div>
                                                    </div>
                                                  ) : (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazx mt-3"></div>
                                                    </div>
                                                  );
                                                }
                                              }
                                            )}
                                            <h6 className="d-block prof">
                                              {user.username}
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
                                  );
                                }
                              })}
                            </Slider>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(min-width:768px) and (max-width:1365px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid">
              <div className="row ">
                {allusers.users.map((user) => {
                  if (user.category === name) {
                    console.log(user.Category, name);
                    if (user.works > 0) {
                      if (user.works <= 2) {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: user.works,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      } else {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      }
                      return (
                        <div className="col-11 ml-5 dsa p-3">
                          <div className="row">
                            <h4 className="d-inline-block ml-4">
                              Work by
                              {
                                <NavLink to="#" className="link">
                                  {user.username}
                                </NavLink>
                              }
                            </h4>
                            <NavLink
                              className="btn btn-primary sssds ml-auto mr-4 mt-0 d-inline-block"
                              to={`/user/profile/${user._id}`}
                            >
                              Hire
                            </NavLink>
                          </div>
                          <div className="mt-3">
                            <Slider {...settings}>
                              {allworks.works.map((work) => {
                                if (work.createdBy._id === user._id) {
                                  return (
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
                                            src={work.images[1].img}
                                            alt="card"
                                            className="imjh"
                                          ></img>
                                          <div className="info d-flex ">
                                            {allprofiles.profiles.map(
                                              (profile) => {
                                                if (
                                                  profile.createdBy._id ===
                                                  user._id
                                                ) {
                                                  return profile.createdBy
                                                    .online === true ? (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazxi mt-3"></div>
                                                    </div>
                                                  ) : (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazx mt-3"></div>
                                                    </div>
                                                  );
                                                }
                                              }
                                            )}
                                            <h6 className="d-block prof">
                                              {user.username}
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
                                  );
                                }
                              })}
                            </Slider>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </div>
            </div>
          ) : null;
        }}
      </Media>
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid">
              <div className="row ">
                {allusers.users.map((user) => {
                  if (user.category === name) {
                    console.log(user.Category, name);
                    if (user.works > 0) {
                      if (user.works <= 1) {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: user.works,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      } else {
                        {
                          settings = {
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            nextArrow: <SampleNextArrow />,
                            prevArrow: <SamplePrevArrow />,
                          };
                        }
                      }
                      return (
                        <div className="col-11 ml-3 dsa p-3">
                          <div className="row">
                            <h5 className="d-inline-block ml-4">
                              Work by
                              {
                                <NavLink to="#" className="link">
                                  {user.username}
                                </NavLink>
                              }
                            </h5>
                            <NavLink
                              className="btn btn-primary sssds ml-auto mr-4 mt-0 d-inline-block"
                              to={`/user/profile/${user._id}`}
                            >
                              Hire
                            </NavLink>
                          </div>
                          <div className="mt-3">
                            <Slider {...settings}>
                              {allworks.works.map((work) => {
                                if (work.createdBy._id === user._id) {
                                  return (
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
                                            src={work.images[1].img}
                                            alt="card"
                                            className="imjh"
                                          ></img>
                                          <div className="info d-flex ">
                                            {allprofiles.profiles.map(
                                              (profile) => {
                                                if (
                                                  profile.createdBy._id ===
                                                  user._id
                                                ) {
                                                  return profile.createdBy
                                                    .online === true ? (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazxi mt-3"></div>
                                                    </div>
                                                  ) : (
                                                    <div className="d-flex">
                                                      <img
                                                        src={
                                                          profile.profileimage
                                                        }
                                                        alt="profile"
                                                        className="ilk"
                                                      ></img>
                                                      <div className="qazx mt-3"></div>
                                                    </div>
                                                  );
                                                }
                                              }
                                            )}
                                            <h6 className="d-block prof">
                                              {user.username}
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
                                  );
                                }
                              })}
                            </Slider>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default Category;
