import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function TableComponent() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/companies`, {
    }).then((response) => {
      setData(response.data);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      } console.log(error.config);
    });
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      {console.log(data)}
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.phoneNumber}</td>
          </tr>
        )) : null}

      </tbody>
    </Table>
  );
}

export default TableComponent;
