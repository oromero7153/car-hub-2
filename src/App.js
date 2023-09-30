import './App.css';
import EventsPage from './components/EventsPage';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          {/*<Route path="/" element={<Container />} /> */}
          {/*<Route path= "/rides" element={<RidesExpanded />} /> */}
          <Route path= "/events" element={<EventsPage />} />
          {/*<Route path= "/about>" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
