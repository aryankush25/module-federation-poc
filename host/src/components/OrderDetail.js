import React, { useState, Suspense } from "react";
import "./OrderDetail.css";

// Dynamically import the remote Modal component instead of the ShipmentIssueModal
const RemoteModal = React.lazy(() => import("remote/Modal"));

const OrderDetail = () => {
  const [triggerModal, setTriggerModal] = useState(false);
  const [triggerModalBackdrop, setTriggerModalBackdrop] = useState(false);
  const [activeTab, setActiveTab] = useState("notes"); // 'notes' or 'history'

  const toggleIssueModal = () => {
    setTriggerModal((prev) => !prev);
  };

  const toggleIssueModalBackdrop = () => {
    setTriggerModalBackdrop((prev) => !prev);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="order-detail-container">
      <div className="toolbar">
        <div className="toolbar-logo">Toolbox</div>
      </div>

      <div className="order-header">
        <h2>
          Order Detail W09232020{" "}
          <span className="search-results">Search Results</span>
        </h2>
        <div className="customer-info">
          <div>Customer: John Choe</div>
          <div>Customer ID: 5500121210T2</div>
          <div>Order Created: 11/21/2022 18:03:08 CST</div>
        </div>
        <div className="header-actions">
          <button className="link-button">1 Document(s)</button>
          <button className="notes-button">Notes</button>
        </div>
      </div>

      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <div className="order-section">
            <div className="section-header">
              <div className="expand-icon">▼</div>
              <h3>ORD# 1510221766</h3>
              <div className="section-actions">
                <button
                  className="info-button"
                  onClick={() => {
                    alert("Customer Info");
                    console.log("Customer Info");
                  }}
                >
                  Customer Info
                </button>
                <button className="more-button">•••</button>
              </div>
            </div>

            <div className="order-details">
              <div className="detail-row">
                <div>
                  <strong>Type:</strong> Original Order
                </div>
                <div>
                  <strong>PO#:</strong> 2304/8013
                </div>
                <div>
                  <strong>SO Created:</strong> 11/21/2022 PST
                </div>
              </div>
              <div className="detail-row">
                <div>
                  <strong>Sales District:</strong> NCO - USA NCO CONSUMER
                </div>
                <div>
                  <strong>Entry Method:</strong> ZWEB (Apple Store Online)
                </div>
              </div>
            </div>

            <div className="order-tabs">
              <button className="tab">Item Detail</button>
              <button className="tab active">Fulfillment</button>
              <button className="tab">Payment</button>
            </div>
          </div>

          <div className="fulfillment-section">
            <div className="section-header">
              <div className="expand-icon">▼</div>
              <h3>Fulfillment Info</h3>
            </div>

            <div className="fulfillment-details">
              <div className="fulfillment-columns">
                <div className="column">
                  <h4>Destination</h4>
                  <div className="detail-item">
                    <div>
                      <strong>Fulfillment Type:</strong> STH - Delivery to
                      Customer
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Shipping Address:</strong> John Appleseed
                    </div>
                    <div>5 Alameda Drive Cupertino, CA, 94024</div>
                    <div>United States</div>
                    <div>+1-2347753921</div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Shipping Method:</strong> Ground Shipping
                      <button className="link-button small">Edit</button>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <h4>Additional Info</h4>
                  <div className="detail-item">
                    <div>
                      <strong>Option:</strong> Ship Complete
                      <button className="link-button small">Remove</button>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Order Current Date:</strong> In stock - Tue 2 May
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Gift:</strong> No
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Open Item Weight:</strong> 2.11 lb
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Notification:</strong> UI 2342753221
                      <button className="link-button small">Edit</button>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Do Not Ship Before:</strong> 12/01/2022 CST
                    </div>
                  </div>
                  <div className="detail-item">
                    <div>
                      <strong>Auto-Cancel By:</strong> N/A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="items-section">
            <div className="section-header">
              <div className="expand-icon">▼</div>
              <h3>Items for Fulfillment</h3>
              <div className="section-actions">
                <button className="link-button">Collapse All</button>
              </div>
            </div>

            <div className="items-content">
              <div className="invoice-info">
                <div>
                  <strong>Invoice #:</strong> 9400324456, Created: 11/22/2022
                  PST
                </div>
                <div>
                  <strong>Delivery #:</strong> 1332175230, Created: 11/22/2022
                  PST
                </div>
              </div>

              <div className="fulfillment-status">
                <div className="status-header">
                  <div className="status-title">
                    Fulfilled | Delivery to Customer
                  </div>
                  <div className="status-actions">
                    <button
                      className="primary-button"
                      onClick={() => toggleIssueModal()}
                    >
                      Create Shipment Issue (No Backdrop)
                    </button>

                    <button
                      className="primary-button"
                      onClick={() => toggleIssueModalBackdrop()}
                    >
                      Create Shipment Issue
                    </button>

                    <button className="secondary-button">Actions ▼</button>
                  </div>
                </div>

                <div className="tracking-info">
                  <div>
                    <strong>Tracking:</strong> ? Shipment (1): Delivered
                    02/16/2023 PST
                  </div>
                  <div>
                    <button className="link-button">Tracking+</button>
                  </div>
                  <div>
                    <strong>Item(s):</strong> 1
                  </div>
                  <div>
                    <button className="link-button">Collapse</button>
                  </div>
                </div>

                <div className="item-table">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Status</th>
                        <th>Fulfillment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#10</td>
                        <td>
                          iPad Pro 12.9 WiFi 512GB-USA
                          <br />
                          Part #: MHNJ3LL/A
                        </td>
                        <td>1</td>
                        <td>
                          <span className="status-delivered">✓ Delivered</span>
                        </td>
                        <td>
                          STH
                          <br />
                          Ship
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="notes-panel">
            <div className="notes-header">
              <div className="tab-buttons">
                <button
                  className={`tab-button ${
                    activeTab === "notes" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("notes")}
                >
                  New Note
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "history" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("history")}
                >
                  Notes History
                </button>
              </div>
              <button className="collapse-button">Collapse All</button>
            </div>

            {activeTab === "notes" ? (
              <div className="notes-content">
                <textarea
                  className="notes-textarea"
                  placeholder="Enter your notes here..."
                ></textarea>
                <button className="save-note-button">Save Note</button>
              </div>
            ) : (
              <div className="notes-history">
                <div className="issue-card">
                  <div className="issue-header">
                    <h4>Issue: 10191538225</h4>
                  </div>
                  <div className="issue-details">
                    <div className="detail-row">
                      <strong>Contact Category:</strong> Lorem ipsum dolor sit
                      amet
                    </div>
                    <div className="detail-row">
                      <strong>Status:</strong> Closed
                    </div>
                    <div className="detail-row">
                      <strong>Contact Reason:</strong> Lorem ipsum dolor sit
                      amet
                    </div>
                    <div className="detail-row">
                      <strong>Assignee:</strong> Lorem ipsum dolor sit
                    </div>
                    <div className="detail-row">
                      <strong>Reason Details:</strong> Lorem ipsum dolor
                    </div>
                  </div>
                </div>

                <div className="issue-card">
                  <div className="issue-header">
                    <h4>Note ID: 3</h4>
                  </div>
                  <div className="issue-details">
                    <div className="detail-row">
                      <strong>Date:</strong> 11/21/2022 GMT, Jason Apple
                    </div>
                    <div className="detail-row">
                      <strong>Note Type:</strong> SEMS Issue created
                    </div>
                    <div className="detail-row">
                      <strong>Summary:</strong> SEMS issue created
                    </div>
                    <div className="detail-row">
                      <strong>Details:</strong> WON #: XXXXXXXXXXXXX
                    </div>
                    <div className="detail-row">
                      <strong>Case's Name:</strong> John Appleseed
                    </div>
                    <div className="detail-row">
                      <strong>SEMS Case:</strong> XXXXXXXXXXXXX
                    </div>
                    <div className="detail-row">
                      <strong>DNIS:</strong> XXXXXXXXXXXXX
                    </div>
                    <div className="detail-row">
                      <strong>Carrier:</strong> AT&T
                    </div>
                    <div className="detail-row">
                      <strong>Reason for Request:</strong> Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit...
                    </div>
                    <button className="view-more-button">View Less</button>
                  </div>
                </div>

                <div className="issue-card">
                  <div className="issue-header">
                    <h4>Issue: 10191538225</h4>
                  </div>
                  <div className="issue-details">
                    <div className="detail-row">
                      <strong>Contact Category:</strong> Lorem ipsum dolor sit
                      amet
                    </div>
                    <div className="detail-row">
                      <strong>Status:</strong> Closed
                    </div>
                    <div className="detail-row">
                      <strong>Contact Reason:</strong> Lorem ipsum dolor sit
                      amet
                    </div>
                    <div className="detail-row">
                      <strong>Assignee:</strong> Lorem ipsum dolor sit
                    </div>
                    <div className="detail-row">
                      <strong>Reason Details:</strong> Lorem ipsum dolor
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Remote Modal */}
      <Suspense fallback={<div className="loading-modal">Loading...</div>}>
        <RemoteModal
          isOpen={triggerModal}
          onClose={() => toggleIssueModal()}
          variant="no-backdrop"
        />

        <RemoteModal
          isOpen={triggerModalBackdrop}
          onClose={() => toggleIssueModalBackdrop()}
        />
      </Suspense>
    </div>
  );
};

export default OrderDetail;
