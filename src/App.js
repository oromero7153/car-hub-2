import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import EventsPage from "./components/EventsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/events" element={<EventsPage />} />
          {/*<Route path="/rides" element={<Rides />} /> 
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
