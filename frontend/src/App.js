import React from 'react';
import './App.css';
import './User'
import User from './User';
import axios from 'axios';

class App extends React.Component{
    state = {
      users : [],
    }
    getUser = async () => {
      const users = (await axios.get("http://localhost:8000/api/v2/users/user/")).data      
      this.setState({users});
    }

    componentDidMount(){
      this.getUser();
    }

    render(){
       const {users} = this.state
       return(
         <section>
          <div>
          
            {
              
              users.map(user => {
                return <User
                    key={user.id}
                    id={user.id}
                    username={user.username}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    email={user.email}
                    avator={user.avator}
                />
              })
            }
          </div>
          </section>
       )
    }
}

export default App;
