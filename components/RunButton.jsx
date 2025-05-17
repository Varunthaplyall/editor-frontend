const RunButton = ({ handleRun, loading }) => (
  <button
    onClick={handleRun}
    disabled={loading}
    style={{
      backgroundColor: loading ? '#0ea5e9' : '#22d3ee', // lighter blue when running
      color: '#1e293b', // dark text for contrast
      padding: '0.75rem 1rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: loading ? 'not-allowed' : 'pointer',
      boxShadow: '0 4px 10px rgba(48, 194, 216, 0.4)',
      transition: 'background-color 0.3s ease',
      userSelect: 'none',
      display: 'inline-block',
      minWidth: '120px',
      textAlign: 'center',
    }}
  >
    {loading ? 'Running...' : 'Run Code'}
  </button>
);

export default RunButton;
