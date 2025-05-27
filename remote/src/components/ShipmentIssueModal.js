import React from 'react';
import Modal from './Modal';
import ShipmentIssueForm from './ShipmentIssueForm';

const ShipmentIssueModal = ({ isOpen, onClose, orderNumber, deliveryNumber }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Create Shipment Issue | ORD# ${orderNumber || '1510221766'} | DN #${deliveryNumber || '1332175230'}`}
    >
      <ShipmentIssueForm onClose={onClose} />
    </Modal>
  );
};

export default ShipmentIssueModal;
