import React, { useState } from 'react';
import './ShipmentIssueForm.css';

const ShipmentIssueForm = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="shipment-issue-form">
      <h3>What is the issue or request?</h3>
      <div className="form-options">
        <label className="option">
          <input 
            type="radio" 
            name="issue-type" 
            value="not-received" 
            checked={selectedOption === 'not-received'}
            onChange={handleOptionChange}
          />
          <span>Customer did not receive their item</span>
        </label>
        <label className="option">
          <input 
            type="radio" 
            name="issue-type" 
            value="item-issue"
            checked={selectedOption === 'item-issue'}
            onChange={handleOptionChange}
          />
          <span>There was an issue with the items the customer received</span>
        </label>
        <label className="option">
          <input 
            type="radio" 
            name="issue-type" 
            value="change-request"
            checked={selectedOption === 'change-request'}
            onChange={handleOptionChange}
          />
          <span>Customer wants to request a change to their delivery</span>
        </label>
        <label className="option">
          <input 
            type="radio" 
            name="issue-type" 
            value="expedited"
            checked={selectedOption === 'expedited'}
            onChange={handleOptionChange}
          />
          <span>Shipment requires expedited or special delivery services</span>
        </label>
        <label className="option">
          <input 
            type="radio" 
            name="issue-type" 
            value="feedback"
            checked={selectedOption === 'feedback'}
            onChange={handleOptionChange}
          />
          <span>Customer has feedback for their shipment or delivery</span>
        </label>
      </div>
      <div className="form-actions">
        <button 
          className="primary-button"
          onClick={handleSubmit}
          disabled={!selectedOption || isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Continue"}
        </button>
        <button className="cancel-button" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ShipmentIssueForm;
