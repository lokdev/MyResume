import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        <font color="#3399ff">Lokesh</font>
      </h1>
      <address>
        European Life Style Suites, Guadalajara, Jalisco, Mexico
      </address>
      <hr />
      <h2>Summary</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
