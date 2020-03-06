import React from 'react';
import './App.css';
import './User'
import User from './User';
import axios from 'axios';
import {ENDPOINT} from "./constants"


class App extends React.Component{
   constructor(props){
     super(props)
     this.state = {
        users : [],
        page : 1,
        pagesize : 4,
     }
   }
   
    handleIncrease = () => {
      if(this.state.users != null){
        this.setState({
          page: this.state.page + 1
        });
        this.getUser()
      }
      
    }
  
    handleDecrease = () => {
      if(this.state.page > 0){
        this.setState({
          page: this.state.page - 1
        });
        this.getUser()
      }
    }
  
    
    getUser = async () => {
      let page = this.state.page
      console.log(page)
      let pagesize = this.state.pagesize
      const URL = ENDPOINT + `users/user/?page=${page}&pagesize=${pagesize}`
      const users = (await axios.get(URL)).data      
      this.setState({users});
      console.log(this.state.page)
    }

    componentDidMount(){
      this.getUser();
    }

    render(){
       const {users} = this.state
       
       return(
         <section className=" justify-center overflow-auto bg-blue-300">
          <div className="flex w-full justify-center">

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
          <div className=" w-full bg-fixed flex justify-center w-auto py-4"> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3" onClick={this.handleDecrease}>이전페이지</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3" onClick={this.handleIncrease}>다음페이지</button>
          </div>
          
          </section>
          
       )
    }
}

export default App;
