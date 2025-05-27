import React, { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, variant = "no-backdrop" }) => {
  if (!isOpen) return null;

  // Add event listener for escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
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

  // Create ref for the modal content to detect clicks outside (for no-backdrop variant)
  const modalRef = useRef(null);

  // Handle clicks outside modal for no-backdrop variant
  useEffect(() => {
    if (variant === "no-backdrop" && isOpen) {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, onClose, variant]);

  return (
    <>
      {variant === "backdrop" && (
        <div className="modal-overlay" onClick={onClose}></div>
      )}
      <div className={`modal-popup ${isOpen ? "open" : ""}`} ref={modalRef}>
        <div className="modal-header">
          <h2>Create Shipment Issue | ORD# 1510221766 | DN #1332175320</h2>
          <button className="modal-close-button" onClick={onClose}>
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
              <button className="link-button" onClick={onClose}>
                Cancel
              </button>
              <button className="primary-button">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
