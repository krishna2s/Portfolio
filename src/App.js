import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Home />
        <Projects />
        <ProjectDisplay />
        <Experience /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Projects />
        <Experience />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
