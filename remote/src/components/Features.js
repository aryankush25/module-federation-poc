import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Features Page</h2>
      <p>This page showcases the features of the Remote Application.</p>
      
      <div style={{ margin: '20px 0', textAlign: 'left', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3>Module Federation Features</h3>
        <ul>
          <li>Share components between applications</li>
          <li>Load components at runtime</li>
          <li>Independent deployment of micro-frontends</li>
          <li>Shared dependencies to reduce bundle size</li>
        </ul>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#0066cc' }}>Back to Home</Link>
      </div>
    </div>
  );
};

export default Features;
