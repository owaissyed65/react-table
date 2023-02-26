import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserData from './UserData';

const App = () => {
  const [data, setData] = useState([])
  let api = 'https://jsonplaceholder.typicode.com/users';
  const fetchData = async (api) => {
    const res = await axios.get(api)
    const data = await res.data
    setData((prevData) => prevData = data)
  }
  useEffect(() => {
    fetchData(api)
  }, [])
  return (
    <>
      <h1 style={{ textAlign: 'center' ,margin:'5px 0 0 0' ,lineHeight:'3'}}>
        React-Table
      </h1>
      <table >
        <thead >
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Username</th>
            <th>Email</th>
            <th>phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData data={data} />
        </tbody>
      </table>
    </>
  )
}

export default App
