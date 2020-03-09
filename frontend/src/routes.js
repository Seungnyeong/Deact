import React from 'react'
import {BrowerRouter as Router, Route, Switch} from "react-router-dom"
import {Main, List, SearchList, Community} from "./component/index"


class routerlist extends React.Component{
    render(){
        return (
            <div>
            <Route exact path="/" component={Main}/>
            <Route path="/list" component={List}/>
            <Route path="/search" component={SearchList}/>
            <Route path="/board" component={Community}/>
            </div>
        )
    }
}

export default routerlist;