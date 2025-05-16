import { useState } from 'react';
import './App.css';
import CodeEditor from '../components/Editor';
import LanguageSelector from '../components/LanguageSelector';
import InputArea from '../components/InputArea';
import OutputArea from '../components/OutputArea';
import RunButton from '../components/RunButton';
import { submitCode } from './api';

function App() {
  const [languageId, setLanguageId] = useState(71);
  const [code, setCode] = useState('print("Hello, World!")');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setOutput('');
    try {
      const result = await submitCode({
        language_id: languageId,
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
    <div className="App" style={{ padding: '1rem' }}>
      <h2>Online Code Editor</h2>
      <LanguageSelector languageId={languageId} setLanguageId={setLanguageId} />
      <CodeEditor code={code} setCode={setCode} language="python" />
      {/* <InputArea input={input} setInput={setInput} /> */}
      <RunButton handleRun={handleRun} loading={loading} />
      <OutputArea output={output} />
    </div>
  );
}

export default App;
