import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonLoader from "./ButtonLoader/index";
class App extends Component {
  render() {
    return (
      <div className="App">
      <ButtonLoader />
      <p>
        If you like my work, please support by subscribing{" "}
        <a
          style={{ color: "red" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/"
        >
          D'coders youtube channel
        </a>
      </p>
    </div>
    );
  }
}

export default App;
