const researchItems = [
  {
    id: 'caltech-surf-2025',
    title: 'Model Weight & Prompt Determinism in Open-Weight LLMs',
    institution: 'California Institute of Technology (Caltech)',
    role: 'Undergraduate Researcher - SURF Scholar',
    period: 'Jun 2025 - Sep 2025',
    mentors: 'Mentored by R. Michael Alvarez & Danny Ebanks',
    summary: 'Investigated how model weights influence outputs on politically-themed prompts using open-weight Llama 3.1/4 architectures.',
    bullets: [
      'Ran and analyzed prompt-response experiments using PyTorch, TensorFlow, and Hugging Face Transformers.',
      'Analyzed representation behavior and parameter sensitivity across open-weight model checkpoints.',
      'Presented empirical findings to Carleton community as part of my research grant.'
    ],
    tech: ['PyTorch', 'Hugging Face Transformers', 'Llama 3.1/4', 'TensorFlow', 'LLM Evaluation'],
    artifacts: [
      { label: '[Poster]', url: '/Research_Poster_Presentation_SURF2025.pdf', aria: 'View SURF research poster' }
    ]
  },
  {
    id: 'caltech-vurp-2023',
    title: 'Cryptocurrency Misinformation Mechanics on Twitter',
    institution: 'California Institute of Technology - Alvarez Lab',
    role: 'Undergraduate Research Assistant - VURP Scholar',
    period: 'Jun 2023 - Aug 2023',
    mentors: 'Mentored by Dr. R. Michael Alvarez & Danny Ebanks',
    summary: 'Co-led an empirical NLP study dissecting misinformation dynamics and propagation mechanics across a corpus of 300,000+ cryptocurrency tweets.',
    bullets: [
      'Built an automated Python pipeline to tokenize, filter, and vectorize multi-gigabyte tweet datasets.',
      'Fine-tuned a multi-class TensorFlow text classifier to identify and isolate distinct misinformation clusters.',
      'Authored a 10-page research paper and presented findings at both Caltech and Carleton College.'
    ],
    tech: ['Python', 'TensorFlow', 'NLP Pipeline', 'Text Classification', 'Data Mining'],
    artifacts: [
      { label: '[Read Paper]', url: '/papers/Caltech_VURP_2023_Misinformation.pdf', aria: 'Download cryptocurrency misinformation paper PDF' },
      { label: '[Presentation Slides]', url: '/slides/Caltech_VURP_2023_Slides.pdf', aria: 'View Caltech VURP presentation slides PDF' },
      { label: '[Code Repository]', url: 'https://github.com/jamalomosun/twitter-misinformation', aria: 'View research code repository on GitHub' }
    ]
  },
  {
    id: 'carleton-cs-comps',
    title: 'Computer Science Comprehensive Research Project',
    institution: 'Carleton College - Computer Science Department',
    role: 'Undergraduate Researcher',
    period: 'Sep 2025 - Nov 2025',
    mentors: 'Advised by Jean Salac',
    summary: "Conducted a comprehensive research project redesigning Carleton's introductory computer science curriculum to better align with modern industry practices and emerging technologies.",
    bullets: [
      'Analyzed current curriculum structure and identified gaps in coverage of contemporary programming languages and frameworks.',
      'Proposed a new curriculum model emphasizing hands-on projects and integration of civic responsibility with industry practices.',
      'Presented findings and recommendations to the Computer Science Department faculty for potential implementation.',
      'Project was partially implemented in the 2025-2026 academic year, with ongoing evaluation and feedback collection.'
    ],
    tech: ['Curriculum Design', 'Educational Pedagogy', 'Programming Languages'],
    artifacts: [
      { label: '[Project Website]', url: 'https://www.cs.carleton.edu/cs_comps/2526/intro-to-cs/', aria: 'Visit computer science comprehensive project website' }
    ]
  },
  {
    id: 'carleton-math-comps',
    title: 'Mathematics Comprehensive Research Project',
    institution: 'Carleton College - Mathematics Department',
    role: 'Undergraduate Researcher',
    period: 'Sep 2025 - Mar 2026',
    mentors: 'Advised by Rob Thompson',
    summary: 'Developed mathematical models, simulations, skills, and visualizations in preparation for the MCM competition, focusing on real-world problem-solving and applied mathematics. Produced a project solving MCM Problem C that was voted an honorable mention by the MCM judges and received distinction from the Carleton College Mathematics Department.',
    bullets: [
      'Developed mathematical models and simulations to address complex real-world problems, emphasizing the application of theoretical concepts.',
      'Created visualizations to effectively communicate findings and insights derived from the mathematical models.',
      'Collaborated with team members to refine approaches and ensure the accuracy and relevance of the solutions presented.',
      'Project received an honorable mention from MCM judges and distinction from the Carleton College Mathematics Department.'
    ],
    tech: ['Mathematical Modeling', 'Simulations', 'Data Visualization', 'Applied Mathematics'],
    artifacts: [
      { label: '[MCM Pre-Competition Code]', url: 'https://github.com/jamalomosun/math-comps', aria: 'View MCM pre-competition code' },
      { label: '[MCM Code/Paper]', url: 'https://github.com/jamalomosun/MCM', aria: 'View MCM code and paper' }
    ]
  }
];

export default function Research() {
  return (
    <section id="research" className="research-archive" aria-labelledby="research-heading">
      <h2 id="research-heading"><span className="terminal-prompt" aria-hidden="true">$</span> cat ./academic_research.log<span className="terminal-cursor" aria-hidden="true">_</span></h2>
      <div className="research-list">
        {researchItems.map((item) => (
          <article className="terminal-card" key={item.id}>
            <div className="research-card-header">
              <h3>{item.title}</h3>
              <span className="research-period">{item.period}</span>
            </div>
            <p className="research-institution">{item.institution} <span aria-hidden="true">|</span> <span>{item.role}</span></p>
            <p className="research-mentors">{item.mentors}</p>
            <p className="research-summary">{item.summary}</p>
            <ul className="research-bullets">
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="research-tech" aria-label="Technologies and methods">
              {item.tech.map((technology) => <span className="badge" key={technology}>{technology}</span>)}
            </div>
            <div className="research-artifacts">
              {item.artifacts.map((artifact) => (
                <a key={artifact.url} href={artifact.url} target="_blank" rel="noopener noreferrer" aria-label={artifact.aria}>{artifact.label}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
