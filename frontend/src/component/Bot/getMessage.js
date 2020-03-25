import React from 'react';
import user1 from '../../static/images/user1.png'

class Received extends React.Component{
    state = {
        yyyy : '',
        mm : '',
        dd : '',
        hh : '',
        min: ''
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
            <div className="received-chats ml-10 mt-4">
            <div className="received-chats-img">
            <img src={user1}/>
            </div>
              <div className="received-msg">
                <div className="received-msg-inbox">
                  <p>안녕하세요? 챗봇입니다. 무엇을 도와드릴까요?</p>
                    <span className="time">{hh}:{min} | {mm}월{dd}일</span>
                </div>
              </div>
            </div>
        )
    }
}

export default Received;