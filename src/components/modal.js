import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function NavBarComponent(props) {
  const { show, handleClose, users } = props;
  console.log(users);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NavBarComponent;

NavBarComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.objects).isRequired,
  handleClose: PropTypes.func.isRequired,
};
