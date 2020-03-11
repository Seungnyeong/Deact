import React from 'react'
import {ENDPOINT} from "../../../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry,faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


class SearchResultList extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            result: [],
            total_count : '',
        }
    }
   
    componentWillMount(){
        const URL = ENDPOINT +  `core/search`;  
        fetch(`${URL}`).then(res => res.json())
        .then(data => this.setState({
            result : data.result.rows,
            total_count : data.result.total_count,
        }));
    }
    
    render(){
        const {result, total_count} = this.state;
        const searchList = result.map((rows) => (
            
            <ul className=" bg-teal-800 mb-3 rounded-lg shadow-outline border-gray-200" style={{width :"200px", height : "300px"}}>
                
                    
                    <li className=" bg-teal-600 h-12 rounded-t-lg"><span>제목 : </span>{rows.fields.subject}</li>
                    <li><span>E-mail : </span>{rows.fields.writer}</li>
                    <li>{rows.fields.contents}</li>
                    <li>{rows.fields.hit}</li>
                    <li>{rows.fields.ip}</li>
                    
                    <li>{rows.fields.moddate}</li>
                    <li>{rows.fields.deleteyn}</li>
                    <li>{rows.fields.ymd}</li>
                    <li className=" bg-gray-600">{rows.fields.regdate}</li>
                
            </ul>
            
        ));
        return(
            <div name="article" className="h-75vh w-full">
                <div className="mt-3 border-b-4 mb-1">
                    <FontAwesomeIcon className="text-yellow-600 text-xl ml-3" icon={faAngry}/>
                  {total_count > 0 ? <span className="ml-1">검색어 <b className="text-red-500">"Konan"</b> 에 대한 검색 결과 총 <b className="text-red-500">{total_count}</b>개 입니다.</span> : <span className="ml-1">검색결과가 없습니다.</span>}
                </div>
                <div className="flex flex-wrap justify-between  overflow-hidden overflow-scroll" style={{height: '500px' }} >
                    {searchList}
                    {total_count > 0 &&(
                         <div className=" w-full h-10 inline-flex justify-center ">
                            <button className=" mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"><FontAwesomeIcon icon={faMinus}/> Prev </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Next <FontAwesomeIcon icon={faPlus}/></button>
                         </div>
                    )
                    }
                   
                </div>
                
            </div>
        )
        
    }
}

export {SearchResultList}