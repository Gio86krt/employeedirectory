import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    // <Router>
    <div>
      <Navbar />
      <Wrapper />
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
