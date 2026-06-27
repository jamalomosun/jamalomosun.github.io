import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px', 
      background: '#222', 
      color: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>My Portfolio</div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
        <Link to="/resume" style={{ color: '#fff', textDecoration: 'none' }}>Resume</Link>
        <Link to="/misc" style={{ color: '#fff', textDecoration: 'none' }}>Misc</Link>
      </nav>
    </header>
  );
}