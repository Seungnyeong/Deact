import React from 'react'
import {ENDPOINT} from "../../../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry,faMinus, faPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons'


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
            
            <ul className="mx-4 mb-4 rounded-xl border-black border bg-white  items-center overflow-y-hidden shadow-sm transition  duration-500 ease-in-out transform hover:scale-110 hover:translate-y-5 hover:z-auto hover:z-40 " style={{width :"200px", height : "300px"}}>
                
                    
                    <li className=" ml-2 border-b-2 h-12 w-11/12 rounded-t-xl text-center font-bold bg-white">
                            <span className=" items-center w-20">{rows.fields.BOD_TITLE}</span>
                    </li>
                    
                    <li className=" bg-gray-100 overflow-y-scroll h-40 px-1 text-sm" >{rows.fields.CON_CONTENT}</li>
                    <div className="flex  text-sm text-black" style={{backgroundColor : "red"}}>
                        <span className="ml-3"> Contact with <FontAwesomeIcon className="mr-3" icon={faAddressCard}/>{rows.fields.SITE_NAME}</span>
                    </div>
                    <li className=" text-sm text-black" style={{backgroundColor : "orange"}}><span className="ml-3"><a href="#">{rows.fields.MNU_LINK}</a></span></li>    
                    
                    <li className="font-thin text-sm text-right text-black" style={{backgroundColor : "yellow"}}>{rows.fields.CON_RGSTDATETIME}</li>
            </ul>
            
        ));
        return(
            <div name="article" className="h-full w-full">
                <div className="mt-3 border-b-4 mb-1">
                    <FontAwesomeIcon className="text-yellow-600 text-xl ml-3" icon={faAngry}/>
                  {total_count > 0 ? <span className="ml-1">검색어 <b className="text-red-500">"Konan"</b> 에 대한 검색 결과 총 <b className="text-red-500">{total_count}</b>개 입니다.</span> : <span className="ml-1">검색결과가 없습니다.</span>}
                </div>
                <div className="flex flex-wrap justify-between h-75vh overflow-hidden overflow-scroll w-full" >
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