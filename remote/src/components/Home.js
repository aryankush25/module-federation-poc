import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Remote App Home Page</h2>
      <p>This is the home page of the Remote Application that exposes components.</p>
      <div style={{ margin: '20px 0' }}>
        <h3>Navigation</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}><Link to="/">Home</Link></li>
          <li style={{ margin: '10px 0' }}><Link to="/features">Features</Link></li>
          <li style={{ margin: '10px 0' }}><Link to="/demo">Demo</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
