const InputArea = ({ input, setInput }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label
      style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.95rem',
        color: '#94a3b8', // slate-400
        fontWeight: 'bold'
      }}
    >
      Input (stdin)
    </label>

    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your input here..."
      rows={4}
      style={{
        width: '100%',
        padding: '0.9rem',
        borderRadius: '10px',
        backgroundColor: '#1e293b', // slate-800
        color: '#e2e8f0', // text-slate-100
        border: '1px solid #334155', // slate-700
        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
        fontSize: '1rem',
        fontFamily: 'monospace',
        resize: 'vertical',
        transition: 'border-color 0.2s ease-in-out',
      }}
      onFocus={(e) =>
        (e.target.style.borderColor = '#38bdf8') // sky-400 on focus
      }
      onBlur={(e) =>
        (e.target.style.borderColor = '#334155') // reset border on blur
      }
    />
  </div>
);

export default InputArea;
