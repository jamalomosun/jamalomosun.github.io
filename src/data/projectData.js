export const featuredProjects = [
  {
    id: 'bioedu-ai',
    title: 'BioEdu AI — Literature-Aware Study Assistant',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI API'],
    description: 'Built a retrieval-augmented FastAPI service matching LLM-extracted course concepts to PubMed/Europe PMC papers via pgvector similarity search with deterministic citation tracking.',
    github: 'https://github.com/jamalomosun/BioEdu-AI'
  },
  {
    id: 'maad-portfolio-optimizer',
    title: 'MAAD Portfolio Optimizer',
    tech: ['Python', 'Julia', 'JuMP', 'HiGHS', 'NumPy', 'Pandas'],
    description: 'Developed a Python and Julia based portfolio optimization project that implements a Mean Absolute Deviation (MAD) asset allocation framework solved via Linear Programming. Purely built for academic and research purposes, this project is not intended for financial advice or investment use.',
    github: 'https://github.com/jamalomosun/MAAD-Portfolio-Optimizer'
  },
  {
    id: 'llm-research',
    title: 'LLM Model Weight & Prompt Determinism Research',
    tech: ['PyTorch', 'Hugging Face', 'Llama 3.1/4', 'TensorFlow'],
    description: 'Caltech SURF research analyzing how open-weight LLM parameters influence model outputs across targeted prompt domains.',
  }
];

export function hasDemo(item) {
  return Boolean(item?.demo && item.demo !== '#');
}
