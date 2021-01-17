import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../src/store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/ababeel">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
