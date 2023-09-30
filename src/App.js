import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
