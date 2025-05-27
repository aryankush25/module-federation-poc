import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="content">
      <h2>About Page</h2>
      <p>
        This is the About page of the Host Application. Learn more about how Module Federation
        enables micro-frontends architecture.
      </p>
      <div className="info-section">
        <h3>Module Federation Example</h3>
        <p>
          The components from the Remote application are being loaded at runtime!
          This allows for independent development and deployment of each application.
        </p>
      </div>
      <div className="navigation">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default About;
