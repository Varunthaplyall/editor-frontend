import { useState } from 'react';
import './App.css';
import CodeEditor from '../components/Editor';
import InputArea from '../components/InputArea';
import OutputArea from '../components/OutputArea';
import RunButton from '../components/RunButton';
import { submitCode } from './api';

function App() {
  const [code, setCode] = useState("user_input = input()\nprint(\"You entered:\", user_input)");
  const [input, setInput] = useState('Hello, World!');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setOutput('');
    try {
      const result = await submitCode({
        language_id: 71,
        source_code: code,
        stdin: input,
      });

      const { stdout, stderr, status } = result;
      if (status.description === "Accepted") {
        setOutput(stdout);
      } else {
        setOutput(stderr || status.description);
      }
    } catch (err) {
      setOutput("Server Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#ffffff', minHeight: '100vh', padding: '1rem', overflow: 'auto' }}>
    <h2 style={{ color: '#22d3ee', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600, textAlign: 'center', letterSpacing: '2px', textShadow: '0 0 8px #22d3ee', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      Python Code Runner </h2>

      <div style={{ marginBottom: '1rem' }}>
        <CodeEditor code={code} setCode={setCode} language="python" />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <InputArea input={input} setInput={setInput} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <RunButton handleRun={handleRun} loading={loading} />
      </div>

      <OutputArea output={output} />
    </div>
  );
}

export default App;
