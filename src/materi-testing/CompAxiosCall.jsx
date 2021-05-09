import axios from 'axios';
import { useEffect, useState } from 'react';


const CompAxiosCall = () => {
  const [users, setUsers] = useState([])

  const getUsersData = async () => {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(result.data)
    } catch(ex) {
      console.error(ex)
      setUsers([])
    }
  }

  return (
    <div>
      <p>List anak pureo:</p>
      <button onClick={getUsersData} data-testid="get-users">get User</button>
      {users.map((user) => <p data-testid="user-name" key={user.name}>{user.name}</p>)}
    </div>
  )
}

export default CompAxiosCall