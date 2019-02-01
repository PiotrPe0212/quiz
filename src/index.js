    
import 'bootstrap/dist/css/bootstrap.min.css';    
    import React from "react";
    import ReactDOM from "react-dom";
    import {  App } from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import style from "./main.css";
import { openDb } from "./data_base";
import 'bootstrap';
import "./index.html";


document.addEventListener("DOMContentLoaded", openDb)
    ReactDOM.render(
      <Provider store= {store}>
      <App/>
    </Provider>, document.getElementById("app"));