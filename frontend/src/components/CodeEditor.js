import React from 'react';
import { SandpackCodeEditor } from '@codesandbox/sandpack-react';

function CodeEditor() {
  return (
    <div className="code-editor">
      <SandpackCodeEditor
        showTabs // Show file tabs
        showLineNumbers // Optional: Add line numbers
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default CodeEditor;