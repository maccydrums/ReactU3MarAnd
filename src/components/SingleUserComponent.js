import React, { useState, useEffect, Fragment } from 'react';
import '../App.css';
import CardComponent from './CardComponent';
import PropTypes from 'prop-types';

//renderar SingleUserComponent som visar vilken user man har klickat på i Dashboard
export default function SingleUserComponent({singleUser}) {

  const [users, setUsers] = useState('');

  const street = ((users || {}).address || {}).street;
  const city = ((users || {}).address || {}).city;
  const suite = ((users || {}).address || {}).suite;

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  //
  // async function fetchUsers() {
  //   const response = await fetch('http://api.softhouse.rocks/users/${singleUser}');
  //   const users = await response.json();
  //   setUsers(users);
  // }

  useEffect(() => {
      {singleUser &&
      fetch(`http://api.softhouse.rocks/users/${singleUser}`)
      .then((response) => {
        return response.json()
      })
      .then((newUser) => {
        const user = newUser
        setUsers(user);
      });
      }
    }, []);


  const showAddress = () => {
    return (
      <Fragment>
        <p>{city}</p>
        <p>{street}</p>
        <p>{suite}</p>
      </Fragment>
    );
  }
  return (
    <div className = "wrapper">
      <CardComponent showAddress = {showAddress()}>
        <img src = {'https://static.businessinsider.com/image/51dd6b0ceab8eaa223000013/image.jpg'} alt = 'header'/>
        <h3>{users.username}</h3>
        <h4>{users.name}</h4>
        <h4 style = {{marginBottom: '25px'}}>{users.email}</h4>
      </CardComponent>
    </div>
  );
}

SingleUserComponent.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
}
