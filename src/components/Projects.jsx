import React from 'react';
import { featuredProjects, hasDemo } from '../data/projectData';

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <h2 id="projects-heading"><span className="terminal-prompt">$</span> ls ./featured_projects/</h2>
      <div className="projects-grid" role="list">
        {featuredProjects.map((proj) => (
          <article className="terminal-card" key={proj.id} role="listitem">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--accent-cyan)' }}>{proj.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link" aria-label={`View source for ${proj.title}`}>[Code]</a>}
                {hasDemo(proj) && <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link" aria-label={`Open demo for ${proj.title}`}>[{proj.demoLabel || 'Demo'}]</a>}
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0.75rem 0' }}>{proj.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {proj.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}