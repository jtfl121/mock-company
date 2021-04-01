import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import UserCard from './userCard';

function UserModal(props) {
  const { show, handleClose, users } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflow: 'scroll' }}>
        { users.map((user) => (
          <>
            {console.log(user)}
            <UserCard user={user} />
          </>
        ))}

      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;

UserModal.propTypes = {
  show: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.objects).isRequired,
  handleClose: PropTypes.func.isRequired,
};
