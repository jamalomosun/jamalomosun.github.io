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