import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap'; // For collapsible sections
import '../styles/InvoiceForm.css'; // Importing external CSS for styles
import { Table, Pagination, Form, Button } from 'react-bootstrap';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInvoiceAmountDetails: true,
      showAlternatePayeeDetails: true,
      showLineItemsDetails: true,
      lineItems: [
        { selectDebit: 'Debit', glDesc: 'Original cost-Plant & ...', glCode: '0020200000', text: '' }
      ]
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

  toggleLineItemsDetails = () => {
    this.setState((prevState) => ({
      showLineItemsDetails: !prevState.showLineItemsDetails,
    }));
  };

  handleChange = (index, field, value) => {
    const updatedItems = [...this.state.lineItems];
    updatedItems[index][field] = value;
    this.setState({ lineItems: updatedItems });
  };

  addLineItem = () => {
    this.setState((prevState) => ({
      lineItems: [
        ...prevState.lineItems,
        { selectDebit: '', glDesc: '', glCode: '', text: '' },
      ],
    }));
  };

  handleDelete = (index) => {
    const updatedItems = this.state.lineItems.filter((_, i) => i !== index);
    this.setState({ lineItems: updatedItems });
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
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
                <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Alternate Payee 2:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
                <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">City:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
                <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Street:</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-row mb-3">
                <i class="fa-regular fa-clock"></i>
                <label className="form-label mt-1">Country:</label>
                <input type="text" className="form-control form-input" />
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
          <div className="section-header mb-3" onClick={this.toggleLineItemsDetails}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>LINE ITEM DETAILS</h5>
              <span className="collapse-icon">{this.state.showLineItemsDetails ? '-' : '+'}</span>
            </div>
          </div>
          <Collapse in={this.state.showLineItemsDetails}>
            <div className="section-content">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      <Form.Check type="checkbox" />
                    </th>
                    <th>Select Debit</th>
                    <th>GL Desc</th>
                    <th>GL Code</th>
                    <th>Text (Do not enter special characters)</th>
                    <th></th> {/* For delete icon */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.lineItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>
                        <Form.Control
                          as="select"
                          value={item.selectDebit}
                          onChange={(e) => this.handleChange(index, 'selectDebit', e.target.value)}
                        >
                          <option>Debit</option>
                          <option>Credit</option>
                        </Form.Control>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          value={item.glDesc}
                          onChange={(e) => this.handleChange(index, 'glDesc', e.target.value)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          value={item.glCode}
                          onChange={(e) => this.handleChange(index, 'glCode', e.target.value)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          value={item.text}
                          onChange={(e) => this.handleChange(index, 'text', e.target.value)}
                        />
                      </td>
                      <td>
                        <Button variant="danger" onClick={() => this.handleDelete(index)}>
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="primary" onClick={this.addLineItem}>
                Add
              </Button>
              <div className="mt-3 d-flex justify-content-end">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </Collapse>
        </form>
      </div>
    );
  }
}

export default InvoiceForm;
