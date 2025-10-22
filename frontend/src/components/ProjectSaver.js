import React, { useState } from 'react';

function ProjectSaver({ projectId, setProjectId }) {
  const [inputId, setInputId] = useState('');

  const loadProject = () => {
    if (inputId) {
      setProjectId(inputId);
    }
  };

  const newProject = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setProjectId(newId);
  };

  return (
    <div className="project-saver">
      <p>Project ID: {projectId}</p>
      <input
        type="text"
        placeholder="Enter project ID to load"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button onClick={loadProject}>Load Project</button>
      <button onClick={newProject}>New Project</button>
    </div>
  );
}

export default ProjectSaver;