const InputArea = ({ input, setInput }) => (
  <div>
    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Input (stdin)</label>
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter input..."
      rows={4}
      style={{
        width: '100%',
        padding: '0.75rem',
        borderRadius: '8px',
        backgroundColor: '#2d2d2d',
        color: '#ffffff',
        border: '1px solid #555'
      }}
    />
  </div>
);

export default InputArea;
