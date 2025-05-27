import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";

// Dynamically import the remote ModalDemo component
const RemoteModalDemo = React.lazy(() => import("remote/ModalDemo"));

const Home = () => {
  const [textValue, setTextValue] = useState("");
  const [triggerModal, setTriggerModal] = useState(false);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const openModal = () => setTriggerModal(true);
  const handleModalOpenChange = (isOpen) => {
    if (!isOpen) {
      setTriggerModal(false);
    }
  };

  return (
    <div className="content">
      <h2>Home Page</h2>
      <p>
        This is the home page of the Host Application. This application consumes
        components from the Remote App using Module Federation.
      </p>

      <div className="navigation">
        <h3>Navigation</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/counter">Counter Demo</Link>
          </li>
          <li>
            <Link to="/remote">Remote Demo</Link>
          </li>
          <li>
            <Link to="/order-detail">Order Detail UI</Link>
          </li>
        </ul>
      </div>

      <div className="text-box-container" style={{ margin: "20px 0" }}>
        <h3>Text Input</h3>
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
          placeholder="Enter some text here"
          style={{
            padding: "8px",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {textValue && (
          <p style={{ marginTop: "10px" }}>
            You entered: <strong>{textValue}</strong>
          </p>
        )}
      </div>

      <div style={{ margin: "20px 0" }}>
        <h3>Remote Modal Demo</h3>

        {/* Render the remote ModalDemo component */}
        <Suspense fallback={<div>Loading Modal...</div>}>
          <RemoteModalDemo
            externalTrigger={triggerModal}
            onOpenChange={handleModalOpenChange}
            customTitle="Remote Modal Demo"
            customContent={
              <div style={{ padding: "10px" }}>
                <p>This modal is a component from the Remote application!</p>
                <p>
                  It's being rendered in the Host application through Module
                  Federation.
                </p>
                <p>The entire modal implementation is now in the remote app!</p>
                <input
                  autoFocus
                  type="text"
                  value={textValue}
                  onChange={handleTextChange}
                  placeholder="Enter some text here"
                  style={{
                    padding: "8px",
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                {textValue && (
                  <p style={{ marginTop: "10px" }}>
                    You entered: <strong>{textValue}</strong>
                  </p>
                )}
              </div>
            }
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
