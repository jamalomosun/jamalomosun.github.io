import React from 'react';

const researchItems = [
  {
    id: "caltech-surf-2025",
    title: "Model Weight & Prompt Determinism in Open-Weight LLMs",
    institution: "California Institute of Technology (Caltech)",
    role: "Undergraduate Researcher — SURF Scholar",
    period: "Jun 2025 – Sep 2025",
    mentors: "Mentored by R. Michael Alvarez & Danny Ebanks",
    summary: "Investigated how model weights influence outputs on politically-themed prompts using open-weight Llama 3.1/4 architectures.",
    bullets: [
      "Ran and analyzed prompt-response experiments using PyTorch, TensorFlow, and Hugging Face Transformers.",
      "Analyzed representation behavior and parameter sensitivity across open-weight model checkpoints.",
      "Presented empirical findings to Carleton community as part of my research grant."
    ],
    tech: ["PyTorch", "Hugging Face Transformers", "Llama 3.1/4", "TensorFlow", "LLM Evaluation"],
    artifacts: [
      { label: "[Poster]", url: "https://jamalomosun.github.io/public/Research_Poster_Presentation_SURF2025.pdf", aria: "View Poster Here" },
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
      { label: "[Read Paper]", url: "/papers/Caltech_VURP_2023_Misinformation.pdf", aria: "Download 10-page cryptocurrency misinformation paper PDF" },
      { label: "[Presentation Slides]", url: "/slides/Caltech_VURP_2023_Slides.pdf", aria: "View Caltech VURP presentation slides PDF" },
      { label: "[Code Repository]", url: "https://github.com/jamalomosun/twitter-misinformation", aria: "View research code repository on GitHub" }
    ]
  },
  {
    id: "carleton-cs-comps",
    title: "Computer Science Comprehensive Research Project",
    institution: "Carleton College — Computer Science Department",
    role: "Undergraduate Researcher",
    period: "Sep 2025 – Nov 2025",
    mentors: "Advised by Jean Salac",
    summary: "Conducted a comprehensive research project redesigning Carleton's introductory computer science curriculum to better align with modern industry practices and emerging technologies.",
    bullets: [
      "Analyzed current curriculum structure and identified gaps in coverage of contemporary programming languages and frameworks.",
      "Proposed a new curriculum model emphasizing hands-on projects and integration of civic responsibility with industry practices.",
      "Presented findings and recommendations to the Computer Science Department faculty for potential implementation.",
      "Project was partially implemented in the 2025-2026 academic year, with ongoing evaluation and feedback collection."
    ],
    tech: ["Curriculum Design", "Educational Pedagogy", "Programming Languages"],
    artifacts: [
      { label: "[Project Website]", url: "https://www.cs.carleton.edu/cs_comps/2526/intro-to-cs/", aria: "Visit project website" },
    ]
  },
  {
    id: "carleton-math-comps",
    title: "Mathematics Comprehensive Research Project",
    institution: "Carleton College — Mathematics Department",
    role: "Undergraduate Researcher",
    period: "Sep 2025 – Mar 2025",
    mentors: "Advised by Rob Thompson",
    summary: "Developed mathematical models, simulations, skills, and visualizations in preparation for the MCM competition, focusing on real-world problem-solving and applied mathematics. Produced a project solving MCM Problem C that was voted an honorable mention by the MCM judges and recieved distinction from the Carleton College Mathematics Department.",
    bullets: [
      "Developed mathematical models and simulations to address complex real-world problems, emphasizing the application of theoretical concepts.",
      "Created visualizations to effectively communicate findings and insights derived from the mathematical models.",
      "Collaborated with team members to refine approaches and ensure the accuracy and relevance of the solutions presented.",
      "Project received an honorable mention from MCM judges and distinction from the Carleton College Mathematics Department."
    ],
    tech: ["Mathematical Modeling", "Simulations", "Data Visualization", "Applied Mathematics"],
    artifacts: [
      { label: "[MCM Pre-Competition Code]", url: "https://github.com/jamalomosun/math-comps", aria: "View code here" },
      { label: "[MCM Code/Paper]", url: "https://github.com/jamalomosun/MCM", aria: "View code here" }
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