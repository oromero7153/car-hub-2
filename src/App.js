import './App.css';
import EventsPage from './components/EventsPage';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <EventsPage />
        <Routes>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
