import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import AddRides from "./components/AddRides";
import Update from "./components/update"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/addrides" element={<AddRides />} />
          <Route path="/rides/update" element={<Update />} />
          {/*<Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
