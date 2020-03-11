import React from 'react'
import App from './User/App'
import BackGround from '../static/images/1.png'

class Main extends React.Component{
    render(){
        return(
            <div>
                <div className=" h-50vh bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${BackGround})`}}></div>
        
            <App/>
            </div>
        )
    }
}

export default Main;