import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPaperPlane, faPlusCircle, faCamera, faSmile } from '@fortawesome/free-solid-svg-icons';

class BotChat extends React.Component{
    state = {text : ''}

    onFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.text);
        //this.props.onSubmit(this.state.text);
    }
    render(){
    return (
        <div>
          <div className="msg-bottom">
            <div className="bottom-icons">
                <button className="w-10  text-purple-800"><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></button>
                <button className="w-10  text-purple-800"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon></button>
                <button className="w-10  text-purple-800"><FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon></button>
                <button className="w-10  text-purple-800"><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></button>
            </div>
        </div>
        <div className="input-group flex float" style={{height:"50px"}}>
            <form className="w-full" onSubmit={this.onFormSubmit}>
                <input type="text" value={this.state.text} onChange={(e) => {this.setState({text : e.target.value})}}  className="w-full pl-5 top-0 h-full" placeholder="write message..."/>
            </form>
            <div className="ml-3 flex float">
                <button className="w-10"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
                <button className="w-10"><FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon></button>
            </div>
        </div>
        </div>
    )
}
}

export default BotChat
