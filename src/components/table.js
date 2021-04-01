/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Modal from './modal';

function TableComponent() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

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

  const handleSetUsers = (rowUsers) => {
    setUsers(rowUsers);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} handleClose={handleClose} users={users} />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          { data.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleSetUsers(row.users)}
              onKeyDown={() => setShow(true)}
            >
              <td>
                {row.id}
              </td>
              <td>
                {row.name}
              </td>
              <td>{row.phoneNumber}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;
