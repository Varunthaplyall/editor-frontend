const InputArea = ({ input, setInput }) => (
  <textarea
    placeholder="Standard Input"
    rows={4}
    value={input}
    onChange={(e) => setInput(e.target.value)}
    style={{ width: '100%', marginTop: '1rem' }}
  />
);

export default InputArea;
