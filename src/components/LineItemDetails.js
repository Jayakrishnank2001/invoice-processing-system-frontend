import React, { useState } from 'react';
import { Table, Pagination, Dropdown, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LineItemDetails = () => {
  const [lineItems, setLineItems] = useState([
    { selectDebit: 'Debit', glDesc: 'Original cost-Plant & ...', glCode: '0020200000', text: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedItems = [...lineItems];
    updatedItems[index][field] = value;
    setLineItems(updatedItems);
  };

  const addLineItem = () => {
    setLineItems([...lineItems, { selectDebit: '', glDesc: '', glCode: '', text: '' }]);
  };

  const handleDelete = (index) => {
    const updatedItems = lineItems.filter((_, i) => i !== index);
    setLineItems(updatedItems);
  };

  return (
    <div className="container mt-4">
      <h5>LINE ITEM DETAILS</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><Form.Check type="checkbox" /></th>
            <th>Select Debit</th>
            <th>GL Desc</th>
            <th>GL Code</th>
            <th>Text (Do not enter special characters)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((item, index) => (
            <tr key={index}>
              <td><Form.Check type="checkbox" /></td>
              <td>
                <Form.Control 
                  as="select" 
                  value={item.selectDebit}
                  onChange={(e) => handleChange(index, 'selectDebit', e.target.value)}
                >
                  <option value="Debit">Debit</option>
                  <option value="Credit">Credit</option>
                </Form.Control>
              </td>
              <td>{item.glDesc}</td>
              <td>{item.glCode}</td>
              <td>
                <Form.Control 
                  type="text" 
                  value={item.text}
                  onChange={(e) => handleChange(index, 'text', e.target.value)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={addLineItem}>Add Line Item</Button>
      <div className="d-flex justify-content-end mt-3">
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default LineItemDetails;
