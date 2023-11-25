import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default ApiFetch