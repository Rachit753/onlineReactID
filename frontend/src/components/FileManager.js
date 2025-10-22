import React, { useState } from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';

function FileManager({ files, addFile, deleteFile }) {
  const { sandpack } = useSandpack(); // Access Sandpack to sync file changes
  const [newFileName, setNewFileName] = useState('');

  const handleAdd = () => {
    if (newFileName) {
      const filePath = `/${newFileName}.js`; // Simple file naming (e.g., /Component.js)
      addFile(filePath); // Update local state
      sandpack.updateFile(filePath, ''); // Sync with Sandpack
      setNewFileName('');
    }
  };

  const handleDelete = (name) => {
    deleteFile(name); // Update local state
    sandpack.deleteFile(name); // Sync with Sandpack
  };

  return (
    <div className="file-manager">
      <h3>File Explorer</h3> {/* Label as "File Explorer" for UI */}
      <ul>
        {Object.keys(files).map((file) => (
          <li key={file}>
            {file} <button onClick={() => handleDelete(file)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New file name (e.g., Component)"
        value={newFileName}
        onChange={(e) => setNewFileName(e.target.value)}
      />
      <button onClick={handleAdd}>Add File</button>
    </div>
  );
}

export default FileManager;