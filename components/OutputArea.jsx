const OutputArea = ({ output }) => (
  <div
    style={{
      backgroundColor: '#1e293b', // slate dark background
      border: '1px solid #334155', // border with subtle color
      borderRadius: '10px',
      padding: '1rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      fontFamily: 'monospace',
      color: '#00ff88',
      minHeight: '120px',
      maxHeight: '250px',
      overflowY: 'auto',
      position: 'relative'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '0.5rem',
        left: '1rem',
        fontSize: '0.8rem',
        color: '#94a3b8',
        fontWeight: 'bold'
      }}
    >
      Terminal
    </div>

    <pre
      style={{
        marginTop: '1.5rem',
        whiteSpace: 'pre-wrap'
      }}
    >
      {output || '▶ No output yet...'}
    </pre>
  </div>
);

export default OutputArea;
