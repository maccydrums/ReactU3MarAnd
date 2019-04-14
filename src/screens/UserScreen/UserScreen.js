import React, { Component, Fragment } from 'react';
import '../../App.css';
import SingleUserComponent from '../../components/SingleUserComponent';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

//renderar LoginComponent med input och en knapp som skickar vidare användaren till DashboardComponent
class UserScreen extends Component {

  render() {

    return (
      <Fragment>
          <SingleUserComponent
          singleUser={this.props.match.params.id}
          >
          </SingleUserComponent>
      </Fragment>
    );
  }
}

UserScreen.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
}

export default withRouter(UserScreen);
