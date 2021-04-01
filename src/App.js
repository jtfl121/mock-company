import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './components/nav';
import Table from './components/table';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Table />
      </Container>
    </>
  );
}

export default App;
