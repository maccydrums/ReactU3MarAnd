import React, { Component } from 'react';
import '../../App.css';
import CardComponent from '../../components/CardComponent';
import UserComponent from '../../components/UserComponent';

//Renderar CardComponent och Usercomponent, hanterar tre states: color, users och concatUsers.
class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {concatUsers: [''],
                  users: ['Knatte', 'Fnatte', 'Tjatte'],
                  color: true
  };
}

  //bildar en ny array med hjälp av concat-metoden
  addUser = (event) => {
    let userNames = this.state.users.concat(event);
    this.setState({
      users: userNames
    })
  }

  //tar bort sista namnet i listan med slice-metoden
  removeUser = () => {
    let removeUserName = this.state.users.slice(0, -1);
    this.setState({
      users: removeUserName
    })
  }

  //togglar color mellan true och false
  toggleColor = () => {
    this.setState(prevState =>({
      color: !prevState.color,
    }))
  }

  //hanterar vår input och skickar in värdet i concatUsers
  handleInput = (event) => {
    this.setState({concatUsers: event.target.value})
  }


  render() {
    return (
      <div className="wrapper">
      <CardComponent>
        <UserComponent color={this.state.color}/>
        <button type="button" className="btn btn-secondary" onClick={this.toggleColor} style = {{marginLeft: '10px', width: '95%'}}>Toggle Color</button>
      </CardComponent>
      <CardComponent>
        <div className="input-group mb-3">
          <input type="text" value={this.state.concatUsers} className="form-control" onChange={this.handleInput} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Lägg till ett namn..."/>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-success" onClick={() => this.addUser(this.state.concatUsers)}>Add user</button>
          <button type="button" className="btn btn-danger" onClick={() => this.removeUser()}>Remove user</button>
        </div>
      </CardComponent>
      </div>
    );
  }
}

export default DashboardScreen;
