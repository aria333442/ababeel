import React, { useEffect, useState } from "react";
import { createPosts } from "../actions/createpost";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { logins } from "../actions/login";
import Media from "react-media";

function Adminblog() {
  const [name, setname] = useState("");
  const [post, setpost] = useState("");
  const [category, setcategory] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const createpostss = useSelector((state) => state.createpostss);
  const login = (e) => {
    e.preventDefault();
    const Posts = {
      name,
      post,
      category,
    };
    dispatch(createPosts(Posts));
  };
  if (createpostss.message === "post created sucessfully") {
    history.push("/admin/adminhome");
  }
  return (
    <>
      <Media query="(min-width:1366px)">
        {(matches) => {
          return matches ? (
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttt">Brand</h2>
              <div className="row m-0 p-0">
                <div className=" pppppxss">
                  <h3 className="ssssx">Blog</h3>

                  <div className="aaaa"></div>
                  <form onSubmit={login}>
                    <div className="form-group">
                      <label for="email" className="ffff">
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email" className="ffff">
                        category
                      </label>
                      <input
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter category"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password" className="ffff">
                        Post
                      </label>
                      <textarea
                        value={post}
                        onChange={(e) => setpost(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputpassword1"
                        aria-describedby="passwordHelp"
                        placeholder="writepost"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary bbbb">
                      upload
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
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttta text-center">Brand</h2>
              <div className="row m-0 p-0 ">
                <div className="col-12 justify-content-center d-flex">
                  <div className=" pppppxs">
                    <h3 className="ssssx">Blog</h3>

                    <div className="aaaa"></div>
                    <form onSubmit={login}>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          category
                        </label>
                        <input
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter category"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="ffff">
                          Post
                        </label>
                        <textarea
                          value={post}
                          onChange={(e) => setpost(e.target.value)}
                          type="password"
                          className="form-control"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="writepost"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary bbbb">
                        upload
                      </button>
                    </form>
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
            <div className="container-fluid p-0 m-0 xxxx">
              <h2 className="ttta text-center">Brand</h2>
              <div className="row m-0 p-0 ">
                <div className="col-12 justify-content-center d-flex">
                  <div className=" pppppxs">
                    <h3 className="ssssx">Blog</h3>
                    <div className="aaaa"></div>
                    <form onSubmit={login}>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="ffff">
                          category
                        </label>
                        <input
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter category"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="ffff">
                          Post
                        </label>
                        <textarea
                          value={post}
                          onChange={(e) => setpost(e.target.value)}
                          type="password"
                          className="form-control"
                          id="exampleInputpassword1"
                          aria-describedby="passwordHelp"
                          placeholder="writepost"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary bbbb">
                        upload
                      </button>
                    </form>
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

export default Adminblog;
