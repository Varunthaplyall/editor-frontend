const RunButton = ({ handleRun, loading }) => (
  <button onClick={handleRun} disabled={loading}>
    {loading ? 'Running...' : 'Run Code'}
  </button>
);

export default RunButton;
