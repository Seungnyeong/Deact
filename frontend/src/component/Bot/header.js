import React from 'react';
import bot from '../../static/images/bot.gif'

class BotHeader extends React.Component{

    render(){
        return(
            <section>
                <div className="msg-header h-20">
                    <div className="msg-header-img">
                    <img src={bot}></img>
                    </div>
                    <div className="active">
                    <h4>KONANBOT</h4>
                    <h6>3 hours ago..</h6>
                    </div>
                  
                </div>
        </section>
     )
    }
}
export default BotHeader;