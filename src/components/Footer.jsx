export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', 
      padding: '20px', 
      background: '#f4f4f4', 
      marginTop: 'auto', // Helps keep footer at the bottom
      borderTop: '1px solid #ddd'
    }}>
      <p>&copy; {new Date().getFullYear()} Jamal Omosun. All rights reserved.</p>
      <div>
        <a href="https://github.com/jamalomosun" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}>GitHub</a>
        <a href="https://linkedin.com/in/jamal-omosun" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
      </div>
    </footer>
  );
}