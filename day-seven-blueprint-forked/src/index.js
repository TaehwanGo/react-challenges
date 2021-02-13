import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
