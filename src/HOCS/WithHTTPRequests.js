import React, { Component } from 'react';

export default function WithHTTPRequests(WrappedComponent, data) {
  return class extends Component {

    fetchUsers = () => {
      return fetch('http://api.softhouse.rocks/users');
    }

    fetchSingleUser = () => {
      return fetch(`http://api.softhouse.rocks/users/${this.props.singleUser}`)
    }

    render() {
      return (
        <WrappedComponent
        {...this.props}
        fetchUsers = {this.fetchUsers}
        fetchSingleUser = {this.fetchSingleUser} />
      )
    }
  }
}
