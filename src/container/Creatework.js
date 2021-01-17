import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/creatework.css";
import Navbars from "./Navbars";
import { createWork } from "../actions/creatework";
import { useHistory } from "react-router-dom";
import Media from "react-media";

function Creatework() {
  const [images, setimage] = useState([]);
  const [Title, setTitle] = useState();
  const [description, setdescription] = useState();
  const history = useHistory();
  const [price, setprice] = useState();
  const dispatch = useDispatch();
  const handlepictures = (e) => {
    let data = new FormData();
    let files = e.target.files;
    data.append("file", files[0]);
    data.append("upload_preset", "ababeel");
    data.append("cloud_name", "dd77cqt5fs");
    fetch("https://api.cloudinary.com/v1_1/dd77cqt5fs/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setimage([...images, data.url]);
        console.log(images);
      });
  };
  const createW = (e) => {
    e.preventDefault();
    const form = {
      Title,
      description,
      price,
      images,
    };
    dispatch(createWork(form));
  };
  const createworks = useSelector((state) => state.createworks);
  if (createworks.message === "work created succesfuly") {
    history.push("/user/works");
  }
  return (
    <>
      <Navbars />
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid">
              <div className="row">
                <div className="col-4 gglk">
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
                    Create Work
                  </h4>
                  {images.length > 0
                    ? images.map((imgs) => {
                        return (
                          <div
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              marginLeft: "5px",
                            }}
                          >
                            {imgs}
                          </div>
                        );
                      })
                    : null}
                  <form onSubmit={createW}>
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
                          marginTop: "15px",
                        }}
                      >
                        Work images (more than one)
                      </label>
                      <input
                        type="file"
                        name="images"
                        placeholder="Enter one or more work images"
                        className="form-control xxy"
                        onChange={handlepictures}
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
                        Work Title
                      </label>
                      <input
                        type="text"
                        name="Title"
                        className="form-control"
                        placeholder="Enter Work Title in one line"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
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
                        Work description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Write about Work in 200 words"
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
                        Work Price
                      </label>
                      <input
                        type="number"
                        name="from"
                        className="form-control"
                        placeholder="Enter price of work"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create work
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
            <div className="container-fluid">
              <div className="row justify-content-center d-flex">
                <div className="col-6 gglk1">
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
                    Create Work
                  </h4>
                  {images.length > 0
                    ? images.map((imgs) => {
                        return (
                          <div
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              marginLeft: "5px",
                            }}
                          >
                            {imgs.name}
                          </div>
                        );
                      })
                    : null}
                  <form onSubmit={createW}>
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
                          marginTop: "15px",
                        }}
                      >
                        Work images (more than one)
                      </label>
                      <input
                        type="file"
                        name="images"
                        placeholder="Enter one or more work images"
                        className="form-control xxy"
                        onChange={handlepictures}
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
                        Work Title
                      </label>
                      <input
                        type="text"
                        name="Title"
                        className="form-control"
                        placeholder="Enter Work Title in one line"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
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
                        Work description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Write about Work in 200 words"
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
                        Work Price
                      </label>
                      <input
                        type="number"
                        name="from"
                        className="form-control"
                        placeholder="Enter price of work"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create work
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
              <div className="row justify-content-center d-flex">
                <div className="col-11 gglk1">
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
                    Create Work
                  </h4>
                  {images.length > 0
                    ? images.map((imgs) => {
                        return (
                          <div
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              marginLeft: "5px",
                            }}
                          >
                            {imgs.name}
                          </div>
                        );
                      })
                    : null}
                  <form onSubmit={createW}>
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
                          marginTop: "15px",
                        }}
                      >
                        Work images (more than one)
                      </label>
                      <input
                        type="file"
                        name="images"
                        placeholder="Enter one or more work images"
                        className="form-control xxy"
                        onChange={handlepictures}
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
                        Work Title
                      </label>
                      <input
                        type="text"
                        name="Title"
                        className="form-control"
                        placeholder="Enter Work Title in one line"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
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
                        Work description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Write about Work in 200 words"
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
                        Work Price
                      </label>
                      <input
                        type="number"
                        name="from"
                        className="form-control"
                        placeholder="Enter price of work"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary bbbb mb-4 mt-2"
                    >
                      Create work
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

export default Creatework;
