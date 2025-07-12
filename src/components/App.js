import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About"; // make sure About is imported

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

