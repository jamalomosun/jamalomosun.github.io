import React from 'react';
import { researchItems, hasDemo } from '../data/projectData';

export default function Research() {
  return (
    <section id="research" aria-labelledby="research-heading">
      <h2 id="research-heading"><span className="terminal-prompt">$</span> research_archive/</h2>
      <div className="projects-grid" role="list">
        {researchItems.map((r) => (
          <article key={r.id} className="terminal-card" role="listitem" aria-labelledby={r.id + '-title'}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 id={r.id + '-title'} style={{margin:0, fontFamily:'var(--font-mono)'}}>{r.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {r.github && <a className="proj-link" href={r.github} target="_blank" rel="noopener noreferrer" aria-label={`Open repository for ${r.title}`}>[Repo]</a>}
                {hasDemo(r) && <a className="proj-link" href={r.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open demo for ${r.title}`}>[{r.demoLabel || 'Demo'}]</a>}
              </div>
            </div>
            <p className="proj-meta" style={{marginTop:'8px'}}>{r.description}</p>
            <div style={{display:'flex', gap:'8px', marginTop:'12px'}}>
              {r.tags.map((t) => (<span key={t} className="badge">{t}</span>))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
