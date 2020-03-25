import React, { useState } from 'react';
import {BrowserRouter, Route, NavLink, Link, Switch} from "react-router-dom"
import {connect} from "react-redux"
import {actionSearch} from "../../store";
import Main from "../Main"
import Bot from "../Bot/Bot"
import SearchList from '../Search/SearchList'
import Community from '../Community/Community'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const  activeStyle = {
    color:'black',
}

const Header = ({nomalSearch}) => {
   
  const [text, setText] = useState("");
  
  function onChange(e){
    //자동완성 할떄 쓰면 될듯
    setText(e.target.value);
    
  }

  function onSubmit(e){
    e.preventDefault();
    nomalSearch(text);
    setText("");
  }
  
  return (
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
          
          <div className="text-sm flex-grow">
            <ul >
              <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
                  <NavLink to="/bot" activeStyle={activeStyle}>Konan Bot</NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4">
                  <NavLink to="/search" activeStyle={activeStyle}>Search Page</NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white">
                  <NavLink to="/board" activeStyle={activeStyle}>Board</NavLink>
              </li>
              
              <li className=" w-auto h-8 rounded-lg float-right block mt-4 lg:inline-block lg:mt-0 text-black mr-3 bg-white" >
                <form onSubmit={onSubmit}>
                  <div className=" ml-2 w-auto h-auto mt-1">
                    <button><FontAwesomeIcon className="inline-block mr-3" icon={faSearch}></FontAwesomeIcon></button>
                    <input placeholder="검색어를 입력해주세요" id="search_input" onChange={onChange} value={text} className="h-auto focus:outline-none "></input>
                  </div>
                </form>
              </li>              
            </ul>
          
          </div>
          <div className="flex">
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0 text-center">Download</a>
          </div>
        </div>
        
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/bot" component={Bot}/>
          <Route path="/search" component={SearchList}/>
          <Route path="/board" component={Community}/>
        </Switch>  
      </div>
      </BrowserRouter>
  )
}

function mapStateToProps(state){
    return {SearchResultList : state};
}

function mapDispatchToProps(dispatch){

    return {
      nomalSearch : text => dispatch(actionSearch.nomalSearch(text))
    };
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Header)

