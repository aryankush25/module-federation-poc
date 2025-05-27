import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';

// Enhanced ModalDemo that can be controlled externally or used standalone
const ModalDemo = ({ externalTrigger = false, onOpenChange = () => {}, customTitle, customContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
    onOpenChange(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    onOpenChange(false);
  };

  // Effect to listen for external trigger changes
  useEffect(() => {
    if (externalTrigger) {
      openModal();
    }
  }, [externalTrigger]);

  // Default content if no custom content is provided
  const defaultContent = (
    <div style={{ padding: '10px' }}>
      <p>This is a modal component from the Remote application!</p>
      <p>It can be used in both the Remote and Host applications.</p>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button text="Close Modal" onClick={closeModal} />
      </div>
    </div>
  );

  return (
    <div>
      {/* Only show the button when not externally triggered */}
      {!externalTrigger && (
        <Button text="Open Modal" onClick={openModal} />
      )}
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={customTitle || "Remote Modal"}
      >
        {customContent || defaultContent}
      </Modal>
    </div>
  );
};

export default ModalDemo;
