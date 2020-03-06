import React from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';


class Video extends React.Component{
    constructor(props){
        super(props)
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.state={
            isHover : false,
        };
        
    }
    handleMouseHover(){
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state){
      return{
        isHover : !state.isHover
      }
    }

    render(){
        const {isHover} = this.state
        return(
            <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                {
                    isHover ? <ReactPlayer className="items-center mb-5" width="100%" height="100%"  url="https://youtu.be/S5Xc68sBsN8" playing controls/> : <ReactPlayer className="items-center mb-5" width="100%" height="100%"  url="https://youtu.be/S5Xc68sBsN8" controls/>
                }
                
            </div>
        )
    }
}

function User({id, username, first_name, last_name, email ,avator}){
    
    return  (<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-3">      
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{username}</div>
                    <Video/>
                    <div className="flex">   
                    <label className="ml-3">성 : </label>{first_name ? <p className="text-gray-700 text-base">{first_name}</p> : <p className="text-gray-700 text_base">None</p>}
                    <label className="ml-3">이름 : </label>{last_name ? <p className="text-gray-700 text-base">{last_name}</p> : <p className="text-gray-700 text_base">None</p>}
                    </div>
                </div>
                <div className="px-6 py-4">
                    {email ? <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{email}</span> : ''}
                    {avator ? <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{avator}</span> :''}
                </div>
            </div>
            )
}


User.propTypes = {
    id : PropTypes.number.isRequired,
    username : PropTypes.string.isRequired,
    first_name : PropTypes.string.isRequired,
    last_name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    avator : PropTypes.string
}

export default User;