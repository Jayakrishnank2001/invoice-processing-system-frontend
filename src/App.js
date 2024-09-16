import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoicePage from './pages/InvoicePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<InvoicePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
