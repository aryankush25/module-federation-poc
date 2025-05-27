import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Demo = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Demo Page</h2>
      <p>
        This page demonstrates the Button component that is exposed to the host
        application.
      </p>

      <div style={{ margin: "20px 0" }}>
        <Button
          text="Click Me!"
          onClick={() => alert("Button clicked in Remote App!")}
        />
      </div>

      <div style={{ margin: "20px 0" }}>
        <p>
          This button component is shared with the host application through
          Module Federation.
        </p>
      </div>

      <div style={{ margin: "20px 0" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#0066cc" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Demo;
