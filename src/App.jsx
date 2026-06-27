import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Misc from './pages/Misc';

function App() {
  return (
    <Router>
      {/* 1. Flex container wrapper to keep the footer pinned to the bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* 2. Header stays fixed at the top */}
        <Header />
        
        {/* 3. Main content area changes dynamically depending on the URL route */}
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </main>
        
        {/* 4. Footer stays fixed at the bottom */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;