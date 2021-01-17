import React from "react";
import "../css/createprofile.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfiles } from "../actions";
import { useHistory } from "react-router-dom";
import Media from "react-media";

function CreateProfile() {
  const [image, setimage] = useState("");
  const [profileTitle, setprofileTitle] = useState("");
  const [description, setdescription] = useState("");
  const [languages, setlanguages] = useState([]);
  const [category, setcategory] = useState("");
  const [from, setfrom] = useState("");
  const [url, seturl] = useState("");
  const createprofile = useSelector((state) => state.createprofile);
  const history = useHistory();
  const Languages = [
    { value: "English", label: "English" },
    { value: "Urdu", label: "Urdu" },
    { value: "Chineese", label: "Chineese" },
    { value: "Hindi", label: "Hindi" },
    { value: "Arabic ", label: "Arabic " },
    { value: "Spanish ", label: "Spanish " },
    { value: "French ", label: "French " },
    { value: "Punjabi ", label: "Punjabi " },
    { value: "Russian", label: "Russian " },
    { value: "Baengali ", label: "Bengali " },
  ];
  const Categories = [
    { value: "webdevelopement", label: "web development" },
    { value: "Logodesigning", label: "Logo designing" },
    { value: "wordpress", label: "word press" },
    { value: "MernStack", label: "Mern stack" },
    { value: "Gamedevelopment ", label: "Game development" },
    { value: "Seo ", label: "Seo" },

    {
      value: "mobileappsdev",
      label: "mobile apps dev",
    },
    { value: "socialmedia", label: "Social media" },
  ];
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const uploadimage = () => {};

  const createP = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ababeel");
    data.append("cloud_name", "dd77cqt5fs");
    fetch("https://api.cloudinary.com/v1_1/dd77cqt5fs/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        seturl(data.url);
        if (data.url) {
          const form = {
            profileTitle,
            description,
            from,
            profileimage: data.url,
          };
          form.category = category.value;
          languages.map((language) => {
            form.languages = language.value;
          });

          dispatch(createProfiles(form));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (createprofile.message === "profile created succesfully") {
    history.push("/");
  }
  if (!token) {
    history.push("/login");
  }

  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid align-content-center">
              <div className="d-flex justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-4 bord">
                  <h2
                    className="text-center mt-1"
                    style={{
                      fontStyle: "italic",
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      color: "green",
                    }}
                  >
                    Brand
                  </h2>
                  <h4
                    className="mt-1 mb-2"
                    style={{
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      marginLeft: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    Create Profile
                  </h4>
                  {createprofile.message ? (
                    <div class="alert alert-danger" role="alert">
                      {createprofile.message}
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <form onSubmit={createP}>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile picture
                      </label>
                      <div className="d-flex">
                        <input
                          type="file"
                          name="image"
                          className="form-control xxy"
                          onChange={(e) => setimage(e.target.files[0])}
                        ></input>
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        className="mt-1"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile Title
                      </label>
                      <input
                        type="text"
                        name="profileTitle"
                        className="form-control"
                        placeholder="Enter profile Title in one line"
                        value={profileTitle}
                        onChange={(e) => setprofileTitle(e.target.value)}
                        maxLength={30}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile description
                      </label>
                      <textarea
                        type="text"
                        name="profiledescription"
                        className="form-control"
                        placeholder="Tell us about yourself in 200 words"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        style={{
                          height: "120px",
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="from"
                        className="form-control"
                        placeholder="Enter country name"
                        value={from}
                        onChange={(e) => setfrom(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Languages
                      </label>
                      <Select
                        options={Languages}
                        isMulti
                        placeholder="select one or more languages"
                        components={makeAnimated()}
                        onChange={setlanguages}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Category
                      </label>
                      <Select
                        options={Categories}
                        placeholder="select category"
                        onChange={setcategory}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create profile
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
            <div className="container-fluid align-content-center">
              <div className="d-flex justify-content-center">
                <div className="col-6 bord">
                  <h2
                    className="text-center mt-1"
                    style={{
                      fontStyle: "italic",
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      color: "green",
                    }}
                  >
                    Brand
                  </h2>
                  <h4
                    className="mt-1 mb-2"
                    style={{
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      marginLeft: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    Create Profile
                  </h4>
                  {createprofile.message ? (
                    <div class="alert alert-danger" role="alert">
                      {createprofile.message}
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <form onSubmit={createP}>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile picture
                      </label>
                      <input
                        type="file"
                        name="profileimage"
                        className="form-control xxy"
                        onChange={(e) => setimage(e.target.files[0])}
                      ></input>
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        className="mt-1"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile Title
                      </label>
                      <input
                        type="text"
                        name="profileTitle"
                        className="form-control"
                        placeholder="Enter profile Title in one line"
                        value={profileTitle}
                        onChange={(e) => setprofileTitle(e.target.value)}
                        maxLength={30}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile description
                      </label>
                      <textarea
                        type="text"
                        name="profiledescription"
                        className="form-control"
                        placeholder="Tell us about yourself in 200 words"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        style={{
                          height: "120px",
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="from"
                        className="form-control"
                        placeholder="Enter country name"
                        value={from}
                        onChange={(e) => setfrom(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Languages
                      </label>
                      <Select
                        options={Languages}
                        isMulti
                        placeholder="select one or more languages"
                        components={makeAnimated()}
                        onChange={setlanguages}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Category
                      </label>
                      <Select
                        options={Categories}
                        placeholder="select category"
                        onChange={setcategory}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create profile
                    </button>
                  </form>
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
              <div className="d-flex justify-content-center">
                <div className="col-12 bord">
                  <h2
                    className="text-center mt-1"
                    style={{
                      fontStyle: "italic",
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      color: "green",
                    }}
                  >
                    Brand
                  </h2>
                  <h4
                    className="mt-1 mb-2"
                    style={{
                      fontFamily: "helvetica",
                      fontWeight: "700",
                      marginLeft: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    Create Profile
                  </h4>
                  {createprofile.message ? (
                    <div class="alert alert-danger" role="alert">
                      {createprofile.message}
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <form onSubmit={createP}>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile picture
                      </label>
                      <input
                        type="file"
                        name="profileimage"
                        className="form-control xxy"
                        onChange={(e) => setimage(e.target.files[0])}
                      ></input>
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        className="mt-1"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile Title
                      </label>
                      <input
                        type="text"
                        name="profileTitle"
                        className="form-control"
                        placeholder="Enter profile Title in one line"
                        value={profileTitle}
                        onChange={(e) => setprofileTitle(e.target.value)}
                        maxLength={30}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        profile description
                      </label>
                      <textarea
                        type="text"
                        name="profiledescription"
                        className="form-control"
                        placeholder="Tell us about yourself in 200 words"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        style={{
                          height: "120px",
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="from"
                        className="form-control"
                        placeholder="Enter country name"
                        value={from}
                        onChange={(e) => setfrom(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Languages
                      </label>
                      <Select
                        options={Languages}
                        isMulti
                        placeholder="select one or more languages"
                        components={makeAnimated()}
                        onChange={setlanguages}
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="firstname"
                        className="ffff"
                        style={{
                          fontFamily: "helvetica",
                          fontWeight: "700",
                          fontStyle: "italic",
                          marginLeft: "5px",
                          marginBottom: "15px",
                        }}
                      >
                        Category
                      </label>
                      <Select
                        options={Categories}
                        placeholder="select category"
                        onChange={setcategory}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : null;
        }}
      </Media>
    </>
  );
}

export default CreateProfile;
