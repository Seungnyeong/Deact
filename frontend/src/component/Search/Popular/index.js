import React from 'react'

class Popular extends React.Component{
    
    render(){
        return(
            <div className=" ml-2 ">
                <div className=" ml-4 mt-3 border-b-4 mb-1"><span className=" ml-3">급상승 검색어</span></div>
                <ul className="ml-5 max-w-full">
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">1</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">2</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">3</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">4</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">5</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">6</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">7</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">8</div><a href='#' className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">9</div><a href='#'  className="ml-2">코난</a></li>
                    <li className="flex mb-1 transition duration-500 ease-in-out ease-in-out transform hover:-translate-y-1 hover:scale-110"><div className="border bg-white w-6 h-6 text-center shadow text-gray-600">10</div><a href='#' className="ml-2">코난</a></li>
                </ul>
            </div>
        )
        
    }
}

export {Popular}