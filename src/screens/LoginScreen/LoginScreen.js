import React, { Component } from 'react';
import '../../App.css';
import styles from './LoginScreen.module.css';
import CardComponent from '../../components/CardComponent';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

//renderar LoginComponent med input och en knapp som skickar vidare användaren till DashboardComponent
class LoginScreen extends Component {

  //skickar användaren vidare till DashboardComponent
  navigate = () => {
    this.props.history.push('/dashboard');
  }

  infoText = 'You have to login!';

  render() {

    return (
      <div className="wrapper">
        <CardComponent infoText = {this.infoText}>
          <div className={styles.loginWrapper}>
            <div className="input-group mb-2 mt-3">
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Login..."/>
            </div>
            <button type="button" className="btn btn-secondary" style={{width: '80px'}} onClick={this.navigate}>Login</button>
          </div>
        </CardComponent>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
}

export default withRouter(LoginScreen);
