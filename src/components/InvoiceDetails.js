import React, { Component } from 'react';
import InvoiceForm from './InvoiceForm';
import ActionHistory from './ActionHistory';
import { Nav } from 'react-bootstrap';

class InvoiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'invoiceDetails',
    };
  }

  handleSelect = (selectedTab) => {
    this.setState({ activeTab: selectedTab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <Nav variant="tabs" activeKey={activeTab} onSelect={this.handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="invoiceDetails">Invoice Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="actionHistory">Action History</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="col-12">
            {activeTab === 'invoiceDetails' && <InvoiceForm />}
            {activeTab === 'actionHistory' && <ActionHistory />}
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceDetails;
