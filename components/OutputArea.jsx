const OutputArea = ({ output }) => (
  <div>
    <h3 style={{ marginBottom: '0.5rem' }}>Terminal Output</h3>
    <pre
      style={{
        backgroundColor: '#000',
        padding: '1rem',
        borderRadius: '8px',
        color: '#00ff88',
        height: '100px',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap'
      }}
    >
      {output || 'No output yet'}
    </pre>
  </div>
);

export default OutputArea;
