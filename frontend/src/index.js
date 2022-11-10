import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Storage/store";
import { Provider } from "react-redux";

import "./Sass/styles.css";
import App from "./App";

import Header from "./Components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </React.StrictMode>
);
