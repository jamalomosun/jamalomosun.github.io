import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';
import Misc from './pages/Misc';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;