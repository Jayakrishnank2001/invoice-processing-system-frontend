import React, { Component } from 'react';
import '../styles/FooterAction.css'; // Import the external CSS file for styles

class FooterAction extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-items">
          <div className="footer-item">
            <span className="footer-label">Currency:</span><span className="footer-value"> INR</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Inv Basic Amt:</span><span className="footer-value"> 15,000.00</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Basic Tax Amt:</span><span className="footer-value"> 1,000.00</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Inv Total Amt:</span><span className="footer-value"> 16,000.00</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">TDS Amt:</span><span className="footer-value"> 15.00</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Net Payable Amt:</span><span className="footer-value"> 16,000.00</span>
          </div>
          <div className="footer-item">
            <span className="footer-label">Basic Amt Diff:</span><span className="footer-value"> NA</span>
          </div>
        </div>

        <div className="footer-buttons">
          <button className="reject-button">Reject</button>
          <button className="approve-button">Approve</button>
          <button className="select-action-button">Select Action</button>
        </div>
      </div>
    );
  }
}

export default FooterAction;
