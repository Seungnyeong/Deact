import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faBackspace, faBoxOpen } from '@fortawesome/free-solid-svg-icons'

class Category extends React.Component{
    constructor(props){
        super()
        this.state = {
            display : false
        }
    }
    

    handleFoldClick(){  
        this.setState({display : !this.state.display})
    }
    
    render(){
        const btn_class = this.state.display ? "hidden" : "block my-10 w-4/5 h-50vh flex-col cursor-pointer bg-gray-800 rounded-br-xl rounded-tr-xl p-2 "
        return(
            
                <div className={this.state.display ? "w-auto mr-8" : " w-50vh bg-transparent h-75vh "}>
        
                    
                    <ul className={btn_class}>
                        <li className="w-11/12 shadow-inner border-b border-white p-3 text-white rounded-tr-xl rounded-br-xl transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"><span className="">통합검색</span><FontAwesomeIcon className="float-right mt-1" icon={faArrowCircleRight}></FontAwesomeIcon></li>
                        <li className="w-11/12 shadow-inner border-b border-white p-3 text-white rounded-tr-xl rounded-br-xl transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110">인 물<FontAwesomeIcon className="float-right mt-1" icon={faArrowCircleRight}></FontAwesomeIcon></li>
                        <li className="w-11/12 shadow-inner border-b border-white p-3 text-white rounded-tr-xl rounded-br-xl transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110">문 서<FontAwesomeIcon className="float-right mt-1" icon={faArrowCircleRight}></FontAwesomeIcon></li>
                        <li className="w-11/12 shadow-inner border-b border-white p-3 text-white rounded-tr-xl rounded-br-xl transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110">게시판<FontAwesomeIcon className="float-right mt-1" icon={faArrowCircleRight}></FontAwesomeIcon></li>
                        <li className="w-11/12 shadow-inner border-b border-white p-3 text-white rounded-tr-xl rounded-br-xl transition duration-500 ease-in-out  hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110">지식찾기<FontAwesomeIcon className="float-right mt-1" icon={faArrowCircleRight}></FontAwesomeIcon></li>
                        <div className="float-right h-auto mt-24 mr-3 cursor-pointer hover:bg-gray-600 rounded-full h-auto w-auto">
                            <FontAwesomeIcon className="text-white text-xs mr-1 " icon={faBackspace}/>
                            <button className="text-white text-xs focus:outline-none" onClick={this.handleFoldClick.bind(this)} >접기</button>
                        </div>
                    
                    </ul>
                    
                        { this.state.display &&
                        <div className=" bg-gray-800 w-5 rounded-tr-lg rounded-br-lg my-10 transition ease-out duration-700">
                             <FontAwesomeIcon className="text-white text-xs ml-1 " icon={faBoxOpen}/>
                            <button className="text-white text-xs focus:outline-none" onClick={this.handleFoldClick.bind(this)} >열기</button>
                        </div>
                    
                        }
                </div>
            
        )
        
    }
}

export {Category}