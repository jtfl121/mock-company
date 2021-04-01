/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard(props) {
  const { user } = props;
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          Avatar Link:
          {' '}
          {user.avatar}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,

};
