import {createStore} from "redux";

const SEARCH = "SEARCH";
const CATEGORY = "CATEGORY";
const ORDER = "ORDER";



const nomalSearch = (text) =>{
   
    return {
        type : SEARCH,
        text
    }
}


const categorySearch = (text) =>{
    return {
        type : CATEGORY,
        text
    }
}


const orderSearch = (text) =>{
    return {
        type : ORDER,
        text
    }
}


const reducer = (state= [], action) =>{
    switch(action.type){
        case SEARCH : 
            return [{text:action.text, id: Date.now()}]
        case CATEGORY : 
            console.log("category");
            return state;
        case ORDER :
            console.log("order");
            return state;
        default:
            console.log("default");
            return state;
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

export const actionSearch = {
    nomalSearch,
    categorySearch,
    orderSearch
}
export default store;
