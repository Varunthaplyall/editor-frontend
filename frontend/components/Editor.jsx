import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => (
  <Editor
    height="500px"
    language={language}
    value={code}
    onChange={setCode}
    theme="vs-dark"
    options={{
      scrollbar: {
        vertical: 'hidden',
        horizontal: 'hidden',
      },
    }}
  />
);

export default CodeEditor;
