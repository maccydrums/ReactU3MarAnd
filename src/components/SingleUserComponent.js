import React, { useState, useEffect, Fragment } from 'react';
import '../App.css';
import CardComponent from './CardComponent';
import PropTypes from 'prop-types';
import WithHTTPRequests from '../HOCS/WithHTTPRequests';

//renderar SingleUserComponent som visar vilken user man har klickat på i Dashboard
function SingleUserComponent(props) {

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
    const url = props.fetchSingleUser();

    url.then((response) => {
      return response.json()
    })
    .then((newUser) => {
      const user = newUser
      setUsers(user);
    });
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
        <img src = {'http://blogs.discovermagazine.com/inkfish/files/2017/09/8696883646_cc332cc707_z.jpg'} alt = 'header'/>
        <h3>{users.username}</h3>
        <h4>{users.name}</h4>
        <h4 style = {{marginBottom: '25px'}}>{users.email}</h4>
      </CardComponent>
    </div>
  );
}

export default WithHTTPRequests(SingleUserComponent);

SingleUserComponent.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
}
