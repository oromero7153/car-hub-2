import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
<<<<<<< HEAD
import EventsPage from "./components/EventsPage";
=======
import RidesExpanded from "./components/Rides_expanded";
import Update from "./components/update"
>>>>>>> main
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Header/>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/events" element={<EventsPage />} />
          {/*<Route path="/rides" element={<Rides />} /> 
          <Route path="/events" element={<EventsPage />} />
=======
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/rides" element={<RidesExpanded />} />
          <Route path="/rides/update" element={<Update />} />
          {/*<Route path="/events" element={<Events />} />
>>>>>>> main
          <Route path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
