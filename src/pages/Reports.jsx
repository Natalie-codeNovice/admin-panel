// src/pages/Reports.jsx

import React from 'react';
import { Table } from 'react-bootstrap';
import { reports } from '../data/mockData';

function Reports() {
  return (
    <div>
      <h2>Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Reports;
