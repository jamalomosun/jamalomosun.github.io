import React from 'react';

const projects = [
  {
    title: "BioEdu AI — Literature-Aware Study Assistant",
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "OpenAI API"],
    description: "Built a retrieval-augmented FastAPI service matching LLM-extracted course concepts to PubMed/Europe PMC papers via pgvector similarity search with deterministic citation tracking.",
    github: "https://github.com/jamalomosun/BioEdu-AI",
    demo: "#"
  },
  {
    title: "Solar Performance Analytics & Portfolio Optimizer",
    tech: ["Python", "Julia", "JuMP", "pvlib", "Scikit-Learn"],
    description: "Simulated array soiling using Kimber physical models and MLP Regressors, pairing it with a Mean Absolute Deviation (MAD) portfolio optimization tool in Julia.",
    github: "https://github.com/jamalomosun/solar-portfolio-optimizer",
    demo: "#"
  },
  {
    title: "LLM Model Weight & Prompt Determinism Research",
    tech: ["PyTorch", "Hugging Face", "Llama 3.1/4", "TensorFlow"],
    description: "Caltech SURF research analyzing how open-weight LLM parameters influence model outputs across targeted prompt domains.",
    github: "https://github.com/jamalomosun",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2><span className="terminal-prompt">$</span> ls ./featured_projects/</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <article className="terminal-card" key={idx}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--accent-cyan)' }}>{proj.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {proj.github !== "#" && <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">[Code]</a>}
                {proj.demo !== "#" && <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link">[Demo]</a>}
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0.75rem 0' }}>{proj.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: '#1e293b', color: 'var(--accent-green)', borderRadius: '4px' }}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}