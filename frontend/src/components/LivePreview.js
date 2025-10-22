import React from 'react';
import { SandpackPreview } from '@codesandbox/sandpack-react';

function LivePreview() {
  return (
    <div className="live-preview">
      <SandpackPreview
        style={{ height: '100%' }}
        showOpenInCodeSandbox={false} // Hide external link for MVP
      />
    </div>
  );
}

export default LivePreview;