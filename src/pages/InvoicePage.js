import React, { Component } from 'react';
import PDFViewer from '../components/PDFViewer';
import InvoiceDetails from '../components/InvoiceDetails';
import FooterAction from '../components/FooterAction';
import '../styles/InvoicePage.css';

class InvoicePage extends Component {
  render() {
    return (
      <div className="invoice-page-container container-fluid">
        <div className="row header py-3">
          <div className="col-6 d-flex align-items-center">
            <button className="btn p-0 me-2">
              <i className="fas fa-arrow-left"></i>
            </button>
            <span className="fw-bold">Task 38991 AP Team</span>
          </div>
          <div className="col-6 text-end">
            <button className="btn me-2 border border-muted">
              <i className="fas fa-arrow-right-arrow-left"></i>
            </button>
            <button className="btn border border-muted">Save to draft</button>
          </div>
        </div>

        <div className="row content-container flex-grow-1">
          <div className="col-md-6 col-12 pdf-section">
            <PDFViewer />
          </div>

          <div className="col-md-6 col-12 form-section">
            <InvoiceDetails />
          </div>
        </div>

        <div className="footer-section py-3">
          <FooterAction />
        </div>
      </div>
    );
  }
}

export default InvoicePage;
