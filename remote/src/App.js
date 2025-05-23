import React from 'react';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Header title="Remote Application" />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>This is the Remote App</h2>
        <p>This application exposes components that can be consumed by the host application.</p>
        <Button text="Remote Button" onClick={() => alert('Button clicked in Remote App!')} />
      </div>
    </div>
  );
};

export default App;
