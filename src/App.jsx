import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <button>Fishing</button>
          <div className="right-header">
            <button>Contact</button>
            <button>About</button>
            <button>Something else</button>
          </div>
        </div>
        <div className="main-title">
          <h1 className="atitle">FISHING</h1>
          <p>AND THE NAME OR SOMETHING</p>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
