import React from "react";
import { BrowserRouter } from "react-router-dom";

// components----------------
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
