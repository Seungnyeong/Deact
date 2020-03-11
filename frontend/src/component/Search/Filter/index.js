import React from 'react'

class Filter extends React.Component{
    
    render(){
        return(
            
            <form className=" ml-4 ">
                <div className=" mt-2 border-b-4 mb-1"><span className=" ml-3">보 기</span></div>
                <div className="ml-2">
                    <input type="radio"  defaultChecked name="radioGroup" value="1"></input>
                    <span className="ml-2">최신순</span>
                </div>
                <div className="ml-2">
                    <input type="radio" name="radioGroup" value="1"></input>
                    <span className="ml-2">정확도순</span>
                </div>
                <div className="ml-2">
                    <input type="radio" name="radioGroup" value="1"></input>
                    <span className="ml-2">인기순</span>
                </div>
             
            </form>
        )
        
    }
}

export {Filter}