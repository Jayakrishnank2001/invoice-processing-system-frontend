import React, { Component } from 'react';

class PDFViewer extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }} className='mt-1'>
        <iframe
          src="/sample-invoice.pdf"
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    );
  }
}

export default PDFViewer;