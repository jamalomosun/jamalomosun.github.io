export const featuredProjects = [
  {
    id: 'bioedu-ai',
    title: 'BioEdu AI — Literature-Aware Study Assistant',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI API'],
    description: 'Built a retrieval-augmented FastAPI service matching LLM-extracted course concepts to PubMed/Europe PMC papers via pgvector similarity search with deterministic citation tracking.',
    github: 'https://github.com/jamalomosun/BioEdu-AI',
    demo: 'https://jamalomosun.github.io',
    demoLabel: 'Launch demo'
  },
  {
    id: 'solar-portfolio-optimizer',
    title: 'Solar Performance Analytics & Portfolio Optimizer',
    tech: ['Python', 'Julia', 'JuMP', 'pvlib', 'Scikit-Learn'],
    description: 'Simulated array soiling using Kimber physical models and MLP Regressors, pairing it with a Mean Absolute Deviation (MAD) portfolio optimization tool in Julia.',
    github: 'https://github.com/jamalomosun/solar-portfolio-optimizer',
    demo: 'https://jamalomosun.github.io',
    demoLabel: 'View notebook'
  },
  {
    id: 'llm-research',
    title: 'LLM Model Weight & Prompt Determinism Research',
    tech: ['PyTorch', 'Hugging Face', 'Llama 3.1/4', 'TensorFlow'],
    description: 'Caltech SURF research analyzing how open-weight LLM parameters influence model outputs across targeted prompt domains.',
    github: 'https://github.com/jamalomosun',
    demo: 'https://jamalomosun.github.io',
    demoLabel: 'Open notes'
  }
];

export const researchItems = [
  {
    id: 'carleton-math-comps-2026',
    title: 'carleton-math-comps-2026',
    description: 'Comprehensive compendium of mathematics comprehensive exams, solutions, and annotated notes prepared for the 2026 cohort at Carleton College.',
    tags: ['Mathematics', 'Exams', 'Notes'],
    github: 'https://github.com/jamalomosun/carleton-math-comps-2026',
    demo: 'https://jamalomosun.github.io',
    demoLabel: 'Open notes'
  },
  {
    id: 'carleton-cs-comps-2026',
    title: 'carleton-cs-comps-2026',
    description: 'Collection of Computer Science comprehensive problems, reference solutions, and reproducible code examples used for student study and teaching.',
    tags: ['Computer Science', 'Teaching', 'Code'],
    github: 'https://github.com/jamalomosun/carleton-cs-comps-2026',
    demo: 'https://jamalomosun.github.io',
    demoLabel: 'Open archive'
  }
];

export function hasDemo(item) {
  return Boolean(item?.demo && item.demo !== '#');
}
