export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="gear" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
            <g className="outer">
              <circle cx="50" cy="50" r="36" fill="none" stroke="#123" strokeWidth="6" />
              <g fill="#0ea5a4" transform="translate(50,50)">
                <path d="M-40,0 L-34,6 L-30,0 L-34,-6 Z" />
                <path d="M40,0 L34,6 L30,0 L34,-6 Z" transform="rotate(90)" />
              </g>
            </g>
            <g className="inner">
              <circle cx="50" cy="50" r="18" fill="#07111a" stroke="#0b2230" strokeWidth="4" />
            </g>
            <g className="core">
              <circle cx="50" cy="50" r="8" fill="#38bdf8" />
            </g>
          </svg>
        </span>
        <div>
          <div className="footer-status">[SYSTEM IDLE // END OF TRANSMISSION]</div>
          <div style={{fontSize:'12px', color:'var(--text-secondary)'}}>© {new Date().getFullYear()} Jamal Omosun</div>
        </div>
      </div>

      <div>
        <> <a href="mailto:locatejamalo@gmail.com">/Email</a> 
        <a href="https://github.com/jamalomosun" target="_blank" rel="noreferrer" className="nav-link">/GitHub</a>
        <a href="https://linkedin.com/in/jamal-omosun" target="_blank" rel="noreferrer" className="nav-link">/LinkedIn</a> 
        </>
      </div>
    </footer>
  );
}