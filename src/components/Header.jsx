import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-brand">Jamal Omosun</div>
      <nav className="site-nav" role="navigation" aria-label="Main navigation">
        <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
        <NavLink to="/research" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Research</NavLink>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        <NavLink to="/misc" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Misc</NavLink>
      </nav>
    </header>
  );
}