import React from 'react';
import {BrowserRouter, Route, NavLink, Link, Switch} from "react-router-dom"
import Main from "../Main"
import List from "../List/List"
import SearchList from '../Search/SearchList'
import Community from '../Community/Community'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const  activeStyle = {
    color:'black',
}
class Header extends React.Component{
  
  render(){
    return(
    <BrowserRouter>
      <nav className="flex items-center justify-between flex-wrap bg-yellow-600 p-6 border-b-2">
    
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      
      <span title="go to Main" className="font-semibold text-xl tracking-tight"><Link to="/">Konan Search</Link></span><span className="ml-2">serviced by NLP Service 1 team</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      
      <div className="text-sm lg:flex-grow">
        <ul>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
              <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
              <NavLink to="/list" activeStyle={activeStyle}>Open API</NavLink>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
               <NavLink to="/search" activeStyle={activeStyle}>Search Page</NavLink>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white">
              <NavLink to="/board" activeStyle={activeStyle}>Board</NavLink>
          </li>
        </ul>
      </div>
      
  
      <div className="flex">
        <div className="flex bg-white text-center items-center focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-1 px-4 block mx-4 appearance-none shadow-2xl leading-normal`">
          <FontAwesomeIcon className="inline-block mr-3" icon={faSearch}></FontAwesomeIcon>
        <input placeholder="검색어를 입력해주세요" className="w-auto h-auto focus:outline-none "></input>
        </div>
        
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0 text-center">Download</a>
      </div>
    </div>
    
  </nav>
  <div>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/list" component={List}/>
      <Route path="/search" component={SearchList}/>
      <Route path="/board" component={Community}/>
    </Switch>  
  </div>
  </BrowserRouter>
    )
  }
  
}
export default Header;

