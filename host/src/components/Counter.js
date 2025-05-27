import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";

// Dynamically import the remote button component using React.lazy
const RemoteButton = React.lazy(() => import("remote/Button"));

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="content">
      <h2>Counter Demo Page</h2>
      <div className="counter-section">
        <h3>Counter: {count}</h3>
        <Suspense fallback={<div>Loading Button...</div>}>
          <RemoteButton text="Increment Counter" onClick={handleClick} />
        </Suspense>
      </div>
      <div className="navigation">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Counter;
