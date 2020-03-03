import React, { Component } from 'react';
import './App.css';
import './User'
import User from './User';
import axios from 'axios';

class App extends React.Component{
    state = {
      users : []
    }
    getUser = async () => {
      const users= await (await axios.get(`http://localhost:8000/users/user/1`)).data
      this.setState({users})
    }

    componentDidMount(){
      this.getUser();
    }

    render(){
       const {users} = this.state
       
       return(
          <div>
                {users.id}
                {users.email}
                {users.first_name}
                {users.last_name}
          </div>
       )
    }
}

export default App;
