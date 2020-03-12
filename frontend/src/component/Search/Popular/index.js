import React from 'react'
import {ENDPOINT} from "../../../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Popular extends React.Component{

    state = {
        result : [],
    }
    
    componentWillMount(){
        const URL = ENDPOINT +  `core/ppk/`;  
        fetch(`${URL}`).then(res => res.json())
        .then(data => this.setState({
            result : data
        }));
    }


    render(){
        const {result} = this.state
        console.log(result)
        let number = 1;
        const arr = result.map((item) => (
        <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div className="border bg-white w-6 h-6 text-center shadow text-gray-600">{number++}</div><a href='#'  className="ml-2 w-24">{item[0]}</a>
            <div className=" text-sm flex">
            {
                item[1] === 'new' && (<div className='text-red-600 '>{item[1]}</div>)
            }
            {
                Number(item[1]) > 0 && (<div className='text-green-600'><FontAwesomeIcon className="text-xs" icon={faArrowUp}/></div>)
            }
            {
                Number(item[1]) < 0 && (<div className='text-blue-600'><FontAwesomeIcon className="text-xs" icon={faArrowDown}/></div>)
            }
            {
                Number(item[1]) === 0 && (<div className='text-gray-600'>-</div>)
            }
            </div>
        </li>
        ))
        return(
            <div className=" ml-2 ">
                <div className=" ml-4 mt-3 border-b-4 mb-1"><span className=" ml-3">급상승 검색어</span></div>
                {
                    
                }
                <ul className="ml-5 max-w-full">
                   {
                       arr
                   }
                </ul>
            </div>
        )
        
    }
}

export {Popular}