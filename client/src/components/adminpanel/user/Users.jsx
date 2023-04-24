import { useState, useEffect } from 'react';
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

export default Users;

