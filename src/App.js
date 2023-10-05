import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
// import RidesExpanded from "./components/Rides_expanded";
// import Update from "./components/update"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          {/* <Route path="/rides" element={<Rides />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;