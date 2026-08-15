export default function Resume() {
	return (
		<main>
			<header>
				<h1>Jamal Omosun</h1>
				<p className="proj-meta">Quantitative researcher • software engineer • applied mathematics</p>
				<p><a href="/Resume.pdf" className="proj-link" target="_blank" rel="noopener noreferrer">Download PDF</a></p>
			</header>

			<article aria-labelledby="summary-heading">
				<h2 id="summary-heading">Summary</h2>
				<p>
					Recent Carleton College graduate with strong background in mathematics and computer science. Experience building research software, data pipelines, and machine-learning systems for applied research and engineering.
				</p>

				<h3>Experience</h3>
				<section>
					<h4>Quantitative Researcher — Alvarez Lab</h4>
					<p className="proj-meta">Research assistant — applied ML, disinformation, and bias analysis</p>
				</section>

				<section>
					<h4>Engineer — Radian Generation</h4>
					<p className="proj-meta">Solar performance analytics and soiling models</p>
				</section>

				<h3>Education</h3>
				<p className="proj-meta">Carleton College — B.A., Mathematics & Computer Science</p>

				<h3>Skills</h3>
				<div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
					{['Python','Julia','React','SQL','PyTorch','Machine Learning'].map((s)=> (
						<span key={s} className="badge">{s}</span>
					))}
				</div>

				<h3>Research & Selected Projects</h3>
				<ul>
					<li>BioEdu AI — Retrieval-augmented learning assistant (FastAPI, pgvector)</li>
					<li>Solar Performance Analytics & Portfolio Optimizer (pvlib, Julia)</li>
					<li>LLM Weight & Prompt Determinism Research (open-weight Llama experiments)</li>
				</ul>

				<h3>Links</h3>
				<p>
					<a className="proj-link" href="https://github.com/jamalomosun" target="_blank" rel="noopener noreferrer">GitHub</a>
					{' • '}
					<a className="proj-link" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
				</p>
			</article>
		</main>
	);
}