import React from 'react';

const researchItems = [
  {
    id: 'carleton-math-comps-2026',
    title: 'carleton-math-comps-2026',
    description: 'Comprehensive compendium of mathematics comprehensive exams, solutions, and annotated notes prepared for the 2026 cohort at Carleton College.',
    tags: ['Mathematics', 'Exams', 'Notes'],
    link: 'https://github.com/jamalomosun/carleton-math-comps-2026'
  },
  {
    id: 'carleton-cs-comps-2026',
    title: 'carleton-cs-comps-2026',
    description: 'Collection of Computer Science comprehensive problems, reference solutions, and reproducible code examples used for student study and teaching.',
    tags: ['Computer Science', 'Teaching', 'Code'],
    link: 'https://github.com/jamalomosun/carleton-cs-comps-2026'
  }
];

export default function Research() {
  return (
    <section id="research">
      <h2><span className="terminal-prompt">$</span> research_archive/</h2>
      <div className="projects-grid" role="list">
        {researchItems.map((r) => (
          <article key={r.id} className="terminal-card" role="listitem" aria-labelledby={r.id + '-title'}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 id={r.id + '-title'} style={{margin:0, fontFamily:'var(--font-mono)'}}>{r.title}</h3>
              <a className="proj-link" href={r.link} target="_blank" rel="noopener noreferrer">[Repo]</a>
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
