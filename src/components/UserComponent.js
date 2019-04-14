import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithHTTPRequests from '../HOCS/WithHTTPRequests';

// funktion som tar emot users och color som props och renderar en li-tagg för varje namn som tas emot från vår lista med namn. Kollar även state på color och renderar antingen en svart eller röd färg.
function UserComponent(props) {

  let color = props.color;
  const colorOne = '#000000';
  const colorTwo = '#ff0000';

  const [users, setUsers] = useState([]);

  // när jag började att pyssla med fetch så tyckte jag att det var smidigare med async & await, men det strulade lite när jag skulle ta emot params, så jag sket i det.
  // får dock fram alla users med async/await här.

  // useEffect(() => {
  //   getUsers();
  // }, []);
  //
  // async function getUsers() {
  //   const response = await fetch('http://api.softhouse.rocks/users');
  //   const users = await response.json();
  //   setUsers(users);
  // }

  // använder hooks och useEffect för att hämta data från vår server
  useEffect(() => {
    const url = props.fetchUsers();
      url.then((response) => {
        return response.json()
      })
      .then((newUser) => {
        const user = newUser
        setUsers(user);
      });
    }, []);


  return (
    <ul style = {{padding: 0}}>
      {users.map((user, id) =>
        <li key={id} className ="list-group-item">
          <Link to={`/user/${user.id}`} style = {{color: color ? colorOne : colorTwo}}>
            {user.name}
          </Link>
        </li>
      )}
    </ul>
  )
}

UserComponent.propTypes = {
  users: PropTypes.array,
  color: PropTypes.bool,
  name: PropTypes.string
}

export default WithHTTPRequests(UserComponent);
