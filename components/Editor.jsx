import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => (
  <div
    style={{
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid #334155', // subtle border
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    }}
  >
    <Editor
      height="400px"
      language={language}
      value={code}
      onChange={setCode}
      theme="vs-dark"
      options={{
        fontSize: 15,
        fontFamily: 'Fira Code, Menlo, monospace',
        lineHeight: 22,
        minimap: { enabled: false },
        padding: { top: 10, bottom: 10 },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorSmoothCaretAnimation: true,
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
          handleMouseWheel: true,
          alwaysConsumeMouseWheel: false,
        },
        tabSize: 4,
        wordWrap: 'on',
        formatOnType: true,
        formatOnPaste: true,
      }}
    />
  </div>
);

export default CodeEditor;
