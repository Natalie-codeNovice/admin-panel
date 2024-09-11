// src/pages/Users.jsx

import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { users } from '../data/mockData';

function Users() {
  const handleDelete = (id) => {
    // Simulate delete action
    console.log(`Delete user with id: ${id}`);
  };

  return (
    <div>
      <h2>User Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="primary" className="me-2">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
