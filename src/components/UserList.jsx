import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import API_URLS from './variables.js'; // Import API_URLS object

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URLS.users) // Access the users endpoint directly from API_URLS
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Users List</Navbar.Brand>
      </Navbar>
      <ul>
  {users.map(user => (
    <li key={user.id}>{user.username} - {user.email}</li>
  ))}
</ul>

    </Container>
  );
};

export default UserList;
