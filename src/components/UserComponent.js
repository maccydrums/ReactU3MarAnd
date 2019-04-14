import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//funktion som tar emot users och color som props och renderar en li-tagg för varje namn som tas emot från vår lista med namn. Kollar även state på color och renderar antingen en svart eller röd färg.
function UserComponent(props) {

  let color = props.color;
  const colorOne = '#000000';
  const colorTwo = '#ff0000';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch('http://api.softhouse.rocks/users');
    const users = await response.json();
    setUsers(users);
  }


  return (
    <Route>
    <ul style = {{padding: 0}}>
      {users.map((user, id) =>
        <li key={id} className ="list-group-item">
          <Link to={`/user/${user.id}`} style = {{color: color ? colorOne : colorTwo}}>
            {user.name}
          </Link>
        </li>
      )}
    </ul>
    </Route>
  )
}

UserComponent.propTypes = {
  users: PropTypes.array,
  color: PropTypes.bool,
  name: PropTypes.string
}

export default UserComponent;
