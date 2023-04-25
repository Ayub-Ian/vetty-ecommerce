import React, { useState, useEffect } from 'react';
import './Users.scss'

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'New User',
      email: 'newuser@example.com'
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (id, newName, newEmail) => {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            name: newName,
            email: newEmail
          };
        }
        return user;
      })
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search by name or email" value={searchTerm} onChange={handleSearch} />
      </div>
      <ul className="users-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user">
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={() => handleEditUser(user.id, 'New Name', 'newemail@example.com')}>Edit</button>
            <div className="edit-user-form">
              <input type="text" defaultValue={user.name} onChange={event => setNewName(event.target.value)} />
              <input type="text" defaultValue={user.email} onChange={event => setNewEmail(event.target.value)} />
              <button onClick={() => handleEditUser(user.id, newName, newEmail)}>Save</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UsersPage;

/*import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="users">
      {users.map((user) => (
        <div className="user" key={user._id}>
          <h3>{user.username}</h3>
        </div>
      ))}
    </div>  
  );
}

export default Users;*/


/*import React, { useState, useEffect } from 'react';
//import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    // dummy data for users
    const dummyUsers = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    ];
    setUsers(dummyUsers);
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'New User',
      email: 'newuser@example.com'
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (id, newName, newEmail) => {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            name: newName,
            email: newEmail
          };
        }
        return user;
      })
    );
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search by name or email" value={searchTerm} onChange={handleSearch} />
      </div>
      <ul className="users-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user">
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={() => handleEditUser(user.id, 'New Name', 'newemail@example.com')}>Edit</button>
            <div className="edit-user-form">
              <input type="text" defaultValue={user.name} onChange={event => setNewName(event.target.value)} />
              <input type="text" defaultValue={user.email} onChange={event => setNewEmail(event.target.value)} />
              <button onClick={() => handleEditUser(user.id, newName, newEmail)}>Save</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UsersPage;*/



