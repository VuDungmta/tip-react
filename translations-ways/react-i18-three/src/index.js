import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import './i18n';
import App from './App';


// append app to dom
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );