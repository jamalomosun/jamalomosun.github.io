import React from 'react';

const researchItems = [
  {
    id: "caltech-surf-2025",
    title: "Model Weight & Prompt Determinism in Open-Weight LLMs",
    institution: "California Institute of Technology (Caltech)",
    role: "Undergraduate Researcher — SURF Scholar",
    period: "Jun 2025 – Sep 2025",
    mentors: "Caltech Faculty & Research Stakeholders",
    summary: "Investigated how model weights influence outputs on politically-themed prompts using open-weight Llama 3.1/4 architectures.",
    bullets: [
      "Ran and analyzed prompt-response experiments using PyTorch, TensorFlow, and Hugging Face Transformers.",
      "Analyzed representation behavior and parameter sensitivity across open-weight model checkpoints.",
      "Presented empirical findings to Caltech faculty and research stakeholders."
    ],
    tech: ["PyTorch", "Hugging Face Transformers", "Llama 3.1/4", "TensorFlow", "LLM Evaluation"],
    artifacts: [
      { label: "[Paper Preprint PDF]", url: "/papers/Caltech_SURF_2025_Llama.pdf", aria: "Download Caltech SURF Llama research paper PDF" },
      { label: "[Poster Slides]", url: "/slides/Caltech_SURF_2025_Poster.pdf", aria: "View Caltech SURF poster presentation slides" },
      { label: "[Code Repository]", url: "https://github.com/jamalomosun", aria: "View research code repository on GitHub" }
    ]
  },
  {
    id: "caltech-vurp-2023",
    title: "Cryptocurrency Misinformation Mechanics on Twitter",
    institution: "California Institute of Technology — Alvarez Lab",
    role: "Undergraduate Research Assistant — VURP Scholar",
    period: "Jun 2023 – Aug 2023",
    mentors: "Mentored by Dr. R. Michael Alvarez & Danny Ebanks",
    summary: "Co-led an empirical NLP study dissecting misinformation dynamics and propagation mechanics across a corpus of 300,000+ cryptocurrency tweets.",
    bullets: [
      "Built an automated Python pipeline to tokenize, filter, and vectorize multi-gigabyte tweet datasets.",
      "Fine-tuned a multi-class TensorFlow text classifier to identify and isolate distinct misinformation clusters.",
      "Authored a 10-page research paper and presented findings at both Caltech and Carleton College."
    ],
    tech: ["Python", "TensorFlow", "NLP Pipeline", "Text Classification", "Data Mining"],
    artifacts: [
      { label: "[Read Paper (10 Pages)]", url: "/papers/Caltech_VURP_2023_Misinformation.pdf", aria: "Download 10-page cryptocurrency misinformation paper PDF" },
      { label: "[Presentation Slides]", url: "/slides/Caltech_VURP_2023_Slides.pdf", aria: "View Caltech VURP presentation slides PDF" }
    ]
  }
];

export default function Research() {
  return (
    <section id="research" style={{ marginTop: '3rem' }}>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>
        <span className="terminal-prompt" aria-hidden="true">$</span> cat ./academic_research.log
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {researchItems.map((item) => (
          <article className="terminal-card" key={item.id}>
            {/* Header: Title & Date */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ margin: 0, color: 'var(--accent-cyan)', fontSize: '1.15rem' }}>
                {item.title}
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {item.period}
              </span>
            </div>

            {/* Institution & Mentors */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-green)', margin: '0.3rem 0 0.75rem 0' }}>
              {item.institution} &bull; <span style={{ color: 'var(--text-secondary)' }}>{item.role}</span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0 0 0.75rem 0', lineHeight: '1.5' }}>
              {item.summary}
            </p>

            {/* Bullet points */}
            <ul style={{ margin: '0 0 1rem 1.2rem', padding: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {item.bullets.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.3rem' }}>{bullet}</li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {item.tech.map((t, idx) => (
                <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: '#1e293b', color: 'var(--accent-green)', borderRadius: '4px' }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Artifact Links (Papers, Slides, Posters) */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
              {item.artifacts.map((art, idx) => (
                <a
                  key={idx}
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={art.aria}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', textDecoration: 'none' }}
                >
                  {art.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}