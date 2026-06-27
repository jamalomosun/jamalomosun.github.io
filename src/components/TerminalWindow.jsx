import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function TerminalWindow({ title, command, description, techStack, githubUrl, liveUrl }) {
  return (
    <div style={styles.window}>
      {/* 1. Terminal Title Bar */}
      <div style={styles.titleBar}>
        <div style={styles.dots}>
          <span style={{ ...styles.dot, backgroundColor: '#FF5F56' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#FFBD2E' }}></span>
          <span style={{ ...styles.dot, backgroundColor: '#27C93F' }}></span>
        </div>
        <div style={styles.titleText}>{title.toLowerCase()}.sh</div>
        <div style={styles.spacer}></div>
      </div>

      {/* 2. Terminal Content Body */}
      <div style={styles.body}>
        <div style={styles.line}>
          <span style={styles.prompt}>user@cosmos:~$</span> <span style={styles.command}>cat {command}</span>
        </div>
        
        <p style={styles.description}>{description}</p>
        
        <div style={styles.techSection}>
          <span style={styles.techLabel}>Modules:</span> [ {techStack.join(', ')} ]
        </div>

        {/* 3. Action Links styled like terminal selections */}
        <div style={styles.linksRow}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" style={styles.link}>
              <FaGithub /> ./source_code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" style={styles.link}>
              <FaExternalLinkAlt /> ./execute_live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Inline CSS Styles to mimic a desktop terminal app window
const styles = {
  window: {
    backgroundColor: '#0D1117',
    border: '1px solid #30363D',
    borderRadius: '6px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    fontFamily: '"Courier New", Courier, monospace',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '450px',
  },
  titleBar: {
    backgroundColor: '#161B22',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderBottom: '1px solid #21262D',
  },
  dots: {
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  titleText: {
    color: '#8B949E',
    fontSize: '0.85rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  spacer: {
    width: '48px', // Balances out the width of the 3 window dots to perfectly center text
  },
  body: {
    padding: '18px',
    color: '#C9D1D9',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  line: {
    marginBottom: '12px',
  },
  prompt: {
    color: '#58A6FF', // Light Cyan Linux Prompt
    fontWeight: 'bold',
  },
  command: {
    color: '#7EE787', // Bright Terminal Green
  },
  description: {
    color: '#E6EDF3',
    margin: '10px 0',
  },
  techSection: {
    color: '#FF7B72', // Orange/Red color for variables/tech stack
    fontSize: '0.85rem',
    marginTop: '15px',
  },
  techLabel: {
    color: '#E1B400',
  },
  linksRow: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    borderTop: '1px dashed #30363D',
    paddingTop: '12px',
  },
  link: {
    color: '#58A6FF',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.9rem',
  },
};