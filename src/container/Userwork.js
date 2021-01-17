import React, { useEffect } from "react";
import Navbar from "../container/Navbar";
import "../css/userwork.css";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { workbyid } from "../actions";
import { NavLink, useParams } from "react-router-dom";
import Media from "react-media";
function Userwork() {
  const dispatch = useDispatch();
  const { workid } = useParams();
  useEffect(() => {
    dispatch(workbyid(workid));
  }, []);
  const allusers = useSelector((state) => state.allusers);
  const workbyId = useSelector((state) => state.workbyId);
  console.log(workbyId.work._id);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          marginRight: "7px",
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
          marginLeft: "10px",
          backgroundColor: "none",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Navbar />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid">
              <div className="row m-0 p-0 d-flex justify-content-center">
                <div className="col-7 contain-1">
                  <h2 style={{ fontFamily: "helvetica", fontWeight: "600" }}>
                    {workbyId.work.Title}
                  </h2>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazxi mt-3"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazx mt-3"></div>
                      </div>
                    )}

                    <NavLink
                      to={`/user/profile/${workbyId.work.createdBy._id}`}
                      className="link"
                    >
                      <p className="usn">{workbyId.work.createdBy.username}</p>
                    </NavLink>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "black",
                        marginTop: "14px",
                        fontSize: "17px",
                        marginLeft: "8px",
                        fontWeight: "500",
                      }}
                    >
                      4 (star)
                    </p>
                  </div>

                  <Slider {...settings}>
                    {workbyId.work.images.map((image) => {
                      return <img src={image} className="ssssl mt-3"></img>;
                    })}
                  </Slider>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About this Work
                  </h4>
                  <pre className="lll">{workbyId.work.description}</pre>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About the seller
                  </h4>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazxi mt-5"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazx mt-5"></div>
                      </div>
                    )}

                    <div className="d-inline-block">
                      <NavLink
                        to={`/user/profile/${workbyId.work.createdBy._id}`}
                      >
                        <h4 style={{ marginTop: "60px", marginLeft: "30px" }}>
                          {workbyId.work.createdBy.username}
                        </h4>
                      </NavLink>
                      <h5
                        className="d-inline-block"
                        style={{
                          marginLeft: "30px",
                          fontFamily: "helvetica",
                          color: "gray",
                          fontStyle: "italic",
                        }}
                      >
                        {workbyId.work.profileId.profileTitle}
                      </h5>
                    </div>
                  </div>
                  <div className="pppuu">
                    <div className="ppuu">
                      <h5 style={{ color: "gray" }}>From</h5>
                      <p
                        style={{
                          fontSize: "22px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.from}
                      </p>
                      <h5 style={{ color: "gray" }}>Avg. responce time</h5>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.responceTime} Hr
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "20px",
                        fontFamily: "helvetica",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      {workbyId.work.profileId.description}
                    </p>
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
            <div className="container-fluid">
              <div className="row m-0 p-0 d-flex justify-content-center">
                <div className="col-9 contain-1">
                  <h2 style={{ fontFamily: "helvetica", fontWeight: "600" }}>
                    {workbyId.work.Title}
                  </h2>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazxi mt-3"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazx mt-3"></div>
                      </div>
                    )}

                    <NavLink
                      to={`/user/profile/${workbyId.work.createdBy._id}`}
                      className="link"
                    >
                      <p className="usn">{workbyId.work.createdBy.username}</p>
                    </NavLink>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "black",
                        marginTop: "14px",
                        fontSize: "17px",
                        marginLeft: "8px",
                        fontWeight: "500",
                      }}
                    >
                      4 (star)
                    </p>
                  </div>

                  <Slider {...settings}>
                    {workbyId.work.images.map((image) => {
                      return <img src={image} className="ssssl mt-3"></img>;
                    })}
                  </Slider>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About this Work
                  </h4>
                  <pre className="lll">{workbyId.work.description}</pre>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About the seller
                  </h4>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazxi mt-5"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazx mt-5"></div>
                      </div>
                    )}
                    <div className="d-inline-block">
                      <NavLink
                        to={`/user/profile/${workbyId.work.createdBy._id}`}
                      >
                        <h4 style={{ marginTop: "60px", marginLeft: "30px" }}>
                          {workbyId.work.createdBy.username}
                        </h4>
                      </NavLink>
                      <h5
                        className="d-inline-block"
                        style={{
                          marginLeft: "30px",
                          fontFamily: "helvetica",
                          color: "gray",
                          fontStyle: "italic",
                        }}
                      >
                        {workbyId.work.profileId.profileTitle}
                      </h5>
                    </div>
                  </div>
                  <div className="pppuu">
                    <div className="ppuu">
                      <h5 style={{ color: "gray" }}>From</h5>
                      <p
                        style={{
                          fontSize: "22px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.from}
                      </p>
                      <h5 style={{ color: "gray" }}>Avg. responce time</h5>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.responceTime} Hr
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "20px",
                        fontFamily: "helvetica",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      {workbyId.work.profileId.description}
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
            <div className="container-fluid">
              <div className="row m-0 p-0 d-flex justify-content-center">
                <div className="col-12 contain-1">
                  <h3 style={{ fontFamily: "helvetica", fontWeight: "600" }}>
                    {workbyId.work.Title}
                  </h3>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazxi mt-3"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklff"
                        ></img>
                        <div className="qazx mt-3"></div>
                      </div>
                    )}
                    <NavLink
                      to={`/user/profile/${workbyId.work.createdBy._id}`}
                      className="link"
                    >
                      <p className="usn">{workbyId.work.createdBy.username}</p>
                    </NavLink>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "yellowGreen",
                        marginTop: "9px",
                        fontSize: "20px",
                        marginLeft: "2px",
                      }}
                    >
                      <AiFillStar />
                    </p>
                    <p
                      style={{
                        color: "black",
                        marginTop: "14px",
                        fontSize: "17px",
                        marginLeft: "8px",
                        fontWeight: "500",
                      }}
                    >
                      4 (star)
                    </p>
                  </div>

                  <Slider {...settings}>
                    {workbyId.work.images.map((image) => {
                      return <img src={image} className="ssssls mt-3"></img>;
                    })}
                  </Slider>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About this Work
                  </h4>
                  <pre className="lll">{workbyId.work.description}</pre>
                  <h4
                    style={{
                      fontFamily: "helvetica",
                      marginTop: "50px",
                      fontWeight: "600",
                    }}
                  >
                    About the seller
                  </h4>
                  <div className="d-flex">
                    {workbyId.work.createdBy.online === true ? (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazxi mt-5"></div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <img
                          src={workbyId.work.profileId.profileimage}
                          alt="profile"
                          className="iklfff"
                        ></img>
                        <div className="qazx mt-5"></div>
                      </div>
                    )}
                    <div className="d-inline-block">
                      <NavLink
                        to={`/user/profile/${workbyId.work.createdBy._id}`}
                      >
                        <h4 style={{ marginTop: "60px", marginLeft: "30px" }}>
                          {workbyId.work.createdBy.username}
                        </h4>
                      </NavLink>
                      <h5
                        className="d-inline-block"
                        style={{
                          marginLeft: "30px",
                          fontFamily: "helvetica",
                          color: "gray",
                          fontStyle: "italic",
                        }}
                      >
                        {workbyId.work.profileId.profileTitle}
                      </h5>
                    </div>
                  </div>
                  <div className="pppuu">
                    <div className="ppuu">
                      <h5 style={{ color: "gray" }}>From</h5>
                      <p
                        style={{
                          fontSize: "22px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.from}
                      </p>
                      <h5 style={{ color: "gray" }}>Avg. responce time</h5>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      >
                        {workbyId.work.profileId.responceTime} Hr
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "20px",
                        fontFamily: "helvetica",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      {workbyId.work.profileId.description}
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

export default Userwork;
