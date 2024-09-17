import React, { Component } from 'react';
import PDFViewer from '../components/PDFViewer';
import InvoiceDetails from '../components/InvoiceDetails';
// import axios from 'axios';
// import FooterAction from '../components/FooterAction';
import '../styles/InvoicePage.css';

class InvoicePage extends Component {

    render() {
        return (
            <div className="container-fluid p-3">
                <div className="row align-items-center">
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
                <div className="row">
                    <div className="col-12 mt-1">
                        <div className="border-top border-1" style={{ borderColor: '#ccc' }}></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="pdf-viewer">
                                <PDFViewer />
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="invoice-form">
                                <InvoiceDetails />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default InvoicePage;
