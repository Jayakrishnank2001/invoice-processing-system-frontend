import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap'; // For collapsible sections
import '../styles/InvoiceForm.css'; // Importing external CSS for styles
import LineItemDetails from './LineItemDetails';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInvoiceAmountDetails: true,
      showAlternatePayeeDetails: false,
    };
  }

  toggleInvoiceAmountDetails = () => {
    this.setState((prevState) => ({
      showInvoiceAmountDetails: !prevState.showInvoiceAmountDetails,
    }));
  };

  toggleAlternatePayeeDetails = () => {
    this.setState((prevState) => ({
      showAlternatePayeeDetails: !prevState.showAlternatePayeeDetails,
    }));
  };

  render() {
    return (
      <div className="p-3">
        <form>
          <div className="section-header mb-3" onClick={this.toggleInvoiceAmountDetails}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>INVOICE AMOUNT DETAILS</h5>
              <span className="collapse-icon">{this.state.showInvoiceAmountDetails ? '-' : '+'}</span>
            </div>
          </div>
          <Collapse in={this.state.showInvoiceAmountDetails}>
            <div className="section-content">
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Currency <span className="text-danger">*</span>:</label>
                <div className="form-value">INR</div>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Inv Basic Amt <span className="text-danger">*</span>:</label>
                <div className="form-value">15,000.00</div>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Inv Tax Amt <span className="text-danger">*</span>:</label>
                <div className="form-value">1,000.00</div>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Total Inv Amt (Incl. of tax) <span className="text-danger">*</span>:</label>
                <div className="form-value">16,000.00</div>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Advance Paid <span className="text-danger">*</span>:</label>
                <input type="number" className="form-control form-input" placeholder="0.00" />
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">TCS Applicable <span className="text-danger">*</span>:</label>
                <div>
                  <input type="radio" name="tcs" id="tcsYes" value="Yes" /> Yes
                  <input type="radio" name="tcs" id="tcsNo" value="No" className="ms-3" /> No
                </div>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Net Payable Amt (Excl. of TDS) <span className="text-danger">*</span>:</label>
                <div className="form-value">16,000.00</div>
              </div>
            </div>
          </Collapse>

          <div className="section-header mb-3" onClick={this.toggleAlternatePayeeDetails}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>ALTERNATE PAYEE DETAILS</h5>
              <span className="collapse-icon">{this.state.showAlternatePayeeDetails ? '-' : '+'}</span>
            </div>
          </div>
          <Collapse in={this.state.showAlternatePayeeDetails}>
            <div className="section-content">
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Alternate Payee 1:</label>
                <input type="text" className="form-control form-input"/>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Alternate Payee 2:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">City:</label>
                <input type="text" className="form-control form-input"/>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Street:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Country:</label>
                <input type="text" className="form-control form-input"/>
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Bank Key / IFSC Code:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Bank Acc No:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
              <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Reference:</label>
                <input type="text" className="form-control form-input" />
              </div>
            </div>
          </Collapse>
          <LineItemDetails />
        </form>
      </div>
    );
  }
}

export default InvoiceForm;
