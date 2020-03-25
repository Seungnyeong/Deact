import React from 'react';
import '../../static/css/bot.css'
import BotHeader from './header'
import Received from './getMessage'
import Send from './sendMessage'
import BotChat from './input'

class Konanbot extends React.Component{

    render(){
        return (
           <div className=" h-75vh pl-56 pr-56 bg-gray-600">
                <div className="h-75vh bg-white">
                    <BotHeader/>
                    <div className="h-50vh">
                    <Received/>
                    <Send/>
                    </div>
                    <BotChat/>
                </div>
           </div> 
        )
    }
}

export default Konanbot;