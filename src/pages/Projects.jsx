import React from 'react';
import TerminalWindow from '../components/TerminalWindow';

export default function Projects() {
  // Array holding your raw data
  const projectList = [
    {
      title: "Orbit-Tracker",
      command: "about_satellite_tracker.txt",
      description: "A real-time telemetry model computing orbital decay paths for decommissioned satellites using coordinate graphing.",
      techStack: ["React", "Three.js", "Math.js"],
      githubUrl: "https://github.com/jamalomosun",
      liveUrl: "https://jamalomosun.github.io",
    },
    {
      title: "Equation-Solver",
      command: "matrix_inversion.py",
      description: "A high-performance algorithmic script designed to compute structural stress points via matrix operations.",
      techStack: ["Python", "NumPy", "C++"],
      githubUrl: "https://github.com/jamalomosun",
      liveUrl: "", // Optional, can be left blank
    },
    {
      title: "Retro-Bash",
      command: "initialize_sandbox.sh",
      description: "A functional browser-based emulator recreating vintage Unix command line utilities and system scripts.",
      techStack: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://github.com/jamalomosun",
      liveUrl: "https://jamalomosun.github.io",
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontFamily: '"Courier New", monospace', borderBottom: '2px solid #30363D', paddingBottom: '10px' }}>
        &gt;_ Executable_Projects
      </h1>
      <p style={{ fontFamily: '"Courier New", monospace', color: '#8B949E', marginBottom: '30px' }}>
        Showing {projectList.length} repository processes found...
      </p>

      {/* Grid container to arrange windows side-by-side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '25px',
        justifyItems: 'center'
      }}>
        {projectList.map((project, index) => (
          <TerminalWindow 
            key={index}
            title={project.title}
            command={project.command}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}