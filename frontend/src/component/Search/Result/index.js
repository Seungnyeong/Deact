import React, { useState, useEffect} from 'react'
import {ENDPOINT} from "../../../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry,faMinus, faPlus, faAddressCard, faSmile } from '@fortawesome/free-solid-svg-icons'
import store from '../../../store'
const page_size = 8;

const SearchResultList = () => {
   
    const keywords = store.getState().map((keyword) => (
        <b className="text-red-500">{keyword.text}</b>
    ));
    

    const [state, setState] = useState({
        result: [],
        total_count : ''
    });

    const [value, setValue] = useState({
        text : '',
        page : 1,
        category : 'ALL'
    });

    const [volume,setVolume] = useState(['ALL','통합검색']);

    const handleIncrease = () => {    
        let page = value.page + 1;
        setValue({text : value.text, page : page, category: value.category});
    };
  
    const handleDecrease = () => {
        let page = value.page - 1 ;
        setValue({text : value.text, page : page, category: value.category});
    };

    const listener = () => {
        let text = store.getState().map(x => x.text);
        let category = store.getState().map(x => x.category);
        if (category[0] === undefined ){
            category = 'ALL';
        }
        setValue({text : text, page : 1, category: category});
        
    };

    store.subscribe(listener);
    
    useEffect(() => {
        const catenm = displayCategory().props.children;
        
        console.log(catenm);
        switch(catenm){
            case 'BOARD': setVolume(['board','게시판']);break;
            case 'PERSON': setVolume(['person','인물']);break;
            case 'KNOW': setVolume(['know','지식찾기']);break;
            case 'DOC': setVolume(['doc','문서']);break;
            default: setVolume(['','통합검색']); 
        }

        let offset = (value.page-1) * page_size
        let limit = page_size * value.page
        const URL = ENDPOINT + `core/search?select=*&from=board.board&where=text_idx='${value.text}' allword&offset=${offset}&limit=${limit}`;  
        fetch(`${URL}`).then(res => res.json())
        .then(data => setState({
            result : data.result.rows,
            total_count : data.result.total_count,
        }));
        console.log(URL)
        
    
    }, [value.text,value.page, value.category]);
    
    const displayCategory = () => {
        return (<span>{value.category[0]}</span>)
    }

    const searchList = state.result.map((rows) => (
        <ul className="mx-4 mb-4 rounded-xl border-black border bg-gray-800 items-center overflow-y-hidden shadow-sm transition  duration-500 ease-in-out transform hover:scale-110 hover:translate-y-5 hover:z-auto hover:z-40 " style={{width :"200px", height : "300px"}}>
            
                
                <li className=" ml-2 border-b-2 h-12 w-11/12 rounded-t-xl text-center font-bold bg-gray-800">
                        <span className=" items-center w-20 text-gray-300">{rows.fields.BOD_TITLE}</span>
                </li>
                
                <li className=" bg-gray-800 overflow-y-scroll h-40 px-1 text-sm text-gray-300" ><div className="ml-2 mt-3">{rows.fields.CON_CONTENT}</div></li>
                <div className="flex  text-sm bg-red-300 " >
                    <span className="ml-3"> Contact <FontAwesomeIcon className="mr-3" icon={faAddressCard}/>{rows.fields.SITE_NAME}</span>
                </div>
                <li className=" text-sm text-black bg-orange-400"><span className="ml-3"><a href="#">{rows.fields.MNU_LINK}</a></span></li>    
                
                <li className="font-thin text-sm text-right text-black bg-yellow-400" ><span className="mr-3">등록일 : {rows.fields.CON_RGSTDATETIME}</span></li>
        </ul>
        
    ));

    
    
    return (
        
        <div name="article" className="h-full w-full">
            <div className="mt-3 border-b-4 mb-1">
                <FontAwesomeIcon className="text-yellow-600 text-xl ml-3" icon={keywords[0] != undefined ? faSmile : faAngry}/>
                    {state.total_count > 0 ? <span className="ml-1">카테고리 {volume[1]} 에서 검색어 {keywords} 에 대한 검색 결과 총 <b className="text-red-500">{state.total_count}</b>개 입니다.</span> : <span className="ml-1">검색어 {keywords}에 대한 검색결과가 없습니다.</span>}
            </div>
        <div className="flex flex-wrap justify-between h-75vh overflow-hidden overflow-scroll w-full" >
            {searchList}
            {state.total_count > 0  &&(
                 <div className=" w-full h-10 inline-flex justify-center ">
                    <button className=" mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg" onClick={handleDecrease}><FontAwesomeIcon icon={faMinus}/> Prev </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg" onClick={handleIncrease}>Next <FontAwesomeIcon icon={faPlus}/></button>
                 </div>
            )
            }
           
        </div>
        
    </div>
    )
}

export   {SearchResultList}