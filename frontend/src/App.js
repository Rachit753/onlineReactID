import React, { useState, useEffect } from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import FileManager from './components/FileManager';
import CodeEditor from './components/CodeEditor';
import LivePreview from './components/LivePreview';
import './styles.css';

function App() {
  const [files, setFiles] = useState({
    '/App.js': `import React from 'react';
function App() {
  return <h1>Hello CipherStudio!</h1>;
}
export default App;`,
    '/index.js': `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));`
  }); // Default starter files
  const [projectId, setProjectId] = useState(localStorage.getItem('projectId') || Math.random().toString(36).substr(2, 9));
  const [inputId, setInputId] = useState(''); // For loading a project

  // Load project from localStorage when projectId changes
  useEffect(() => {
    const savedFiles = localStorage.getItem(`project-${projectId}`);
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, [projectId]);

  // Save files to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`project-${projectId}`, JSON.stringify(files));
    localStorage.setItem('projectId', projectId);
  }, [files, projectId]);

  const addFile = (name) => setFiles({ ...files, [name]: '' });
  const deleteFile = (name) => {
    const newFiles = { ...files };
    delete newFiles[name];
    setFiles(newFiles);
  };

  const loadProject = () => {
    if (inputId) {
      setProjectId(inputId); // Now setProjectId is used here
      setInputId('');
    }
  };

  const newProject = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setProjectId(newId); // And here
  };

  return (
    <SandpackProvider
      template="react"
      files={files}
      options={{ activeFile: '/App.js' }}
    >
      <div className="app">
        <header>
          <h1>CipherStudio</h1>
          <div>
            <span>Project ID: {projectId}</span>
            <input
              type="text"
              placeholder="Enter project ID to load"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
            <button onClick={loadProject}>Load</button>
            <button onClick={newProject}>New Project</button>
          </div>
        </header>
        <div className="ide-layout">
          <FileManager files={files} addFile={addFile} deleteFile={deleteFile} />
          <CodeEditor />
          <LivePreview />
        </div>
      </div>
    </SandpackProvider>
  );
}

export default App;