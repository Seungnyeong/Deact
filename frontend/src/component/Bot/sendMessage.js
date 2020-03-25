import React from 'react';
import user2 from '../../static/images/user2.png'
import BotChat from './input'
class Send extends React.Component{
    state = {
        yyyy : '',
        mm : '',
        dd : '',
        hh : '',
        min: ''
    }
    
    onInputSubmit(text){
        console.log(text);
    }

    loadToday = () => {
        let today = new Date();
        let yyyy = today.getFullYear();
        let mm = today.getMonth() +1;
        let dd = today.getDate();
        let hh = today.getHours();
        let min = today.getMinutes();
        this.setState({
            yyyy : yyyy,
            mm : mm,
            dd : dd,
            hh : hh,
            min: min
        });
    }

    componentDidMount(){
        this.loadToday();
    }
    render(){
        const {yyyy, mm, dd, hh , min} = this.state;
        return (
            <div className="outgoing-chats float">
                <div className="outgoing-chats-msg">
                    <div className="outgoing-chats-msg-inbox">
                        <p></p>
                        <span className="outgoing-time">{hh}:{min} | {mm}월{dd}일</span>
                    </div>
                </div>
                <div className="outgoing-chats-img">
                    <img src={user2}/>
                </div>
          </div>
        )
    }
}

export default Send;