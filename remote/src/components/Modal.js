import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, variant = "backdrop" }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hasUnsavedProgress, setHasUnsavedProgress] = useState(true); // Set to true for demo, in real app would track form changes
  
  // Create ref for the modal content to detect clicks outside (for no-backdrop variant)
  const modalRef = useRef(null);
  
  // Function to handle close attempts with confirmation if needed
  const handleCloseAttempt = () => {
    if (hasUnsavedProgress) {
      setShowConfirmation(true);
    } else {
      onClose();
    }
  };
  
  // Function to confirm close and discard changes
  const confirmClose = () => {
    setShowConfirmation(false);
    onClose();
  };
  
  // Function to cancel close attempt
  const cancelClose = () => {
    setShowConfirmation(false);
  };

  // Add event listener for escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleCloseAttempt();
      }
    };

    // Add event listener when the modal is open
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Clean up the event listener when component unmounts or modal closes
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle clicks outside modal for no-backdrop variant
  useEffect(() => {
    if (variant === "no-backdrop" && isOpen) {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          console.log("clicked outside");
          handleCloseAttempt();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose, variant]);

  // Early return if modal is not open
  if (!isOpen) return null;

  return (
    <>
      {variant === "backdrop" && (
        <div className="modal-overlay" onClick={handleCloseAttempt}></div>
      )}
      <div className={`modal-popup ${isOpen ? "open" : ""}`} ref={modalRef}>
        <div className="modal-header">
          <h2>Create Shipment Issue | ORD# 1510221766 | DN #1332175320</h2>
          <button className="modal-close-button" onClick={handleCloseAttempt}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="issue-form">
            <h3>What is the issue or request?</h3>
            <div className="form-options">
              <label className="option">
                <input
                  type="radio"
                  name="issue-type"
                  value="not-received"
                  checked
                />
                <span>Customer did not receive their item</span>
              </label>
              <label className="option">
                <input type="radio" name="issue-type" value="item-issue" />
                <span>
                  There was an issue with the items the customer received
                </span>
              </label>
              <label className="option">
                <input type="radio" name="issue-type" value="change-request" />
                <span>
                  Customer wants to request a change to their delivery
                </span>
              </label>
              <label className="option">
                <input type="radio" name="issue-type" value="expedited" />
                <span>
                  Shipment requires expedited or special delivery services
                </span>
              </label>
              <label className="option">
                <input type="radio" name="issue-type" value="feedback" />
                <span>
                  Customer has feedback for their shipment or delivery
                </span>
              </label>
            </div>
            <div className="form-actions">
              <button className="link-button" onClick={handleCloseAttempt}>
                Cancel
              </button>
              <button className="primary-button">Continue</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <div className="confirmation-content">
            <h3>Unsaved Changes</h3>
            <p>You have unsaved progress. Are you sure you want to close?</p>
            <div className="confirmation-actions">
              <button className="link-button" onClick={cancelClose}>
                Cancel
              </button>
              <button className="primary-button warning" onClick={confirmClose}>
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
