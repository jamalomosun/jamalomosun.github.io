import React, { useEffect, useState } from 'react';

export default function Substack({ feedUrl = 'https://jamalomosun.substack.com/feed', maxItems = 3 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        setLoading(true);
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
        const res = await fetch(api);
        const json = await res.json();
        if (json && json.items) {
          setPosts(json.items.slice(0, maxItems));
        } else {
          setError('No posts found');
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch feed');
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, [feedUrl, maxItems]);

  const stripHtml = (html = '') => html.replace(/<[^>]+>/g, '');

  return (
    <section className="substack-section">
      <h2><span className="terminal-prompt">$</span> latest_writing()</h2>
      {loading && <p className="proj-meta" aria-live="polite">Loading posts…</p>}
      {error && <p className="proj-meta" aria-live="assertive">Error: {error}</p>}
      <div className="projects-grid">
        {posts.map((p, i) => (
          <article className="terminal-card" key={i}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 style={{margin:0, fontFamily:'var(--font-mono)'}}>{p.title}</h3>
              <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">[Read]</a>
            </div>
            <p className="proj-meta">{new Date(p.pubDate).toLocaleDateString()}</p>
            <p style={{color:'var(--text-secondary)'}}>{stripHtml(p.description).slice(0,200)}{stripHtml(p.description).length>200?'…':''}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const SUBSTACK_URL = "https://jamalomosun.substack.com/feed";
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_URL)}`;

  fetch(API_URL)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("substack-posts");
      if (!container) return;

      if (!data.items || data.items.length === 0) {
        container.innerHTML = "<p class='terminal-prompt'>[SYSTEM: No active transmissions found in feed]</p>";
        return;
      }

      container.innerHTML = ""; // Clear loading message

      // Extract top 3 recent posts
      data.items.slice(0, 3).forEach(post => {
        const date = new Date(post.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });

        // Parse HTML string to extract plain text preview
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = post.description;
        const textSnippet = tempDiv.textContent.trim().replace(/\s+/g, ' ');
        const snippet = textSnippet.length > 150 ? textSnippet.slice(0, 150) + "..." : textSnippet;

        const postCard = document.createElement("article");
        postCard.className = "terminal-card";
        postCard.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
            <h3 style="margin: 0; font-size: 1.1rem;">
              <a href="${post.link}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: none;">
                ${post.title}
              </a>
            </h3>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary); white-space: nowrap;">
              ${date}
            </span>
          </div>
          <p style="margin: 0.6rem 0 0 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">
            ${snippet}
          </p>
          <div style="margin-top: 0.8rem;">
            <a href="${post.link}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-green); text-decoration: none;">
              Read transmission &rarr;
            </a>
          </div>
        `;
        container.appendChild(postCard);
      });
    })
    .catch(err => {
      console.error("Substack RSS Fetch Error:", err);
      const container = document.getElementById("substack-posts");
      if (container) {
        container.innerHTML = "<p style='color: #ef4444; font-family: var(--font-mono);'>[ERROR: Unable to establish link to Substack feed]</p>";
      }
    });
});