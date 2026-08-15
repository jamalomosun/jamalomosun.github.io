import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Resume from './pages/Resume';
import Misc from './pages/Misc';
import './styles.css';

export default function App() {
  return (
    <Router>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="app-root">
        <Header />

        <main id="main-content" className="app-main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}