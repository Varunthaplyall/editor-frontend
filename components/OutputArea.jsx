const OutputArea = ({ output }) => (
  <div style={{
    marginTop: '1.5rem',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '1rem',
    borderRadius: '8px',
    fontFamily: 'monospace',
    minHeight: '120px',
    whiteSpace: 'pre-wrap',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
  }}>
    <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>Output:</h3>
    <pre style={{ margin: 0 }}>{output || 'No output yet.'}</pre>
  </div>
);

export default OutputArea;
