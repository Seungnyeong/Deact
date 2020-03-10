import React from 'react';
import './User'
import User from './User';
import axios from 'axios';
import {ENDPOINT} from "../../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVial, faArrowCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

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
        this.setState({
          page: this.state.page + 1
        }, ()=> this.getUser());        
    }
  
    handleDecrease = () => {
      if(this.state.page > 1){
        this.setState({
          page: this.state.page - 1
        }, ()=> this.getUser());
      }
      
    }
  
    getUser = async () => {
      let page = this.state.page
      let pagesize = this.state.pagesize
      const URL = ENDPOINT + `users/user/?page=${page}&pagesize=${pagesize}`
      const users = (await axios.get(URL)).data      
      this.setState({users});
      
    }
    
    componentDidMount(){
      this.getUser();
    }

    render(){
       const {users} = this.state
       
       return(
         <section className=" justify-center overflow-auto bg-gray-200 h-full bg-fixed">
           <span className=" text-black text-transparent font-sans text-2xl p-5 text"><FontAwesomeIcon className="mx-3 text-red-600" icon={faVial}/>추천 동영상</span>
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
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3" onClick={this.handleDecrease}><FontAwesomeIcon icon={faArrowCircleLeft}/> 이전</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3" onClick={this.handleIncrease}>다음 <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </div>
          
          </section>
          
       )
    }
}

export default App;
