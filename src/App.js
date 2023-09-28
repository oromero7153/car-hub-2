import './App.css';
import Header from "./components/Header";
import Container from './components/Container';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
