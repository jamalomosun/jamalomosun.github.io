import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/misc">Miscellaneous</Link>
    </nav>
  );
}

export default Navbar;