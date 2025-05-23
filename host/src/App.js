import React, { Suspense, useState } from 'react';
import './App.css';

// Dynamically import the remote components using React.lazy
const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteHeader = React.lazy(() => import('remote/Header'));

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading Header...</div>}>
        <RemoteHeader title="Host Application" />
      </Suspense>
      
      <div className="content">
        <h2>This is the Host App</h2>
        <p>This application consumes components from the Remote App using Module Federation.</p>
        
        <div className="counter-section">
          <h3>Counter: {count}</h3>
          <Suspense fallback={<div>Loading Button...</div>}>
            <RemoteButton text="Increment Counter" onClick={handleClick} />
          </Suspense>
        </div>
        
        <div className="info-section">
          <h3>Module Federation Example</h3>
          <p>The button and header above are being loaded from a separate application (Remote) at runtime!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
