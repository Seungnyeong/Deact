import React from 'react'
import axios from 'axios'
import {ENDPOINT} from "../constants"

class NaverAPI extends React.Component{
    
    state ={
        NaverAPIResult : [],
        depth1 : []
    }

    getNaverCalls = async () => {
        const URL = ENDPOINT + `core/naver`;
        const NaverAPIResult = await (await axios.get(URL)).data;
        const depth1 = NaverAPIResult.results 
        this.setState({NaverAPIResult, depth1})
    }

    componentDidMount(){
        this.getNaverCalls();
    }

    render(){
        let {depth1} = this.state
        const name = (<div className="h-auto w-full px-3 bg-gray-200 items-center">
            <h1 className="bg-yellow-600 text-white rounded-lg text-center w-full">Naver 검색어 트렌드</h1>
        </div>)
        const listitem = depth1.map((items) => (

                <ul className="flex bg-gray-200 w-full">
                    <li className="bg-gray-600 px-3 rounded-lg w-20 h-6">{items.title}</li>
                    <li className="bg-gray-300 px-3 rounded-lg w-20 h-6">{items.keywords[0]}</li>
                    <li className="bg-blue-300 px-3 rounded-lg w-35">
                        {items.data.map(arr =>(<div>{arr.period} </div>) )}
                    </li>
                    <li className="bg-blue-300 px-3 rounded-lg w-15">
                        {items.data.map(arr =>(<div>{Math.floor(arr.ratio)}</div>))}
                    </li>
                </ul>
            ))
        const list = (
                <ul className="flex">
                    <li className="bg-gray-600 px-3 rounded-lg w-20 h-6">종류</li>
                    <li className="bg-gray-600 px-3 rounded-lg w-20 h-6">키워드</li>
                    <li className=" bg-teal-700 shadow-md px-3 rounded-lg w-35">기간</li>
                    <li className="bg-gray-600 px-3 rounded-lg w-15 h-6">점수</li>
                </ul> 
        )    
        return React.createElement("div", {className : "bg-teal-500 items-center border"}, name,list , listitem)
    }
}

export default NaverAPI;

