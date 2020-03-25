import {createStore} from "redux";

const SEARCH = "SEARCH";
const CATEGORY = "CATEGORY";
const ORDER = "ORDER";
const PPK = "PPK";


const nomalSearch = (text) =>{
   
    return {
        type : SEARCH,
        text
    }
}


const categorySearch = (category) =>{
    return {
        type : CATEGORY,
        category
    }
}


const orderSearch = (text) =>{
    return {
        type : ORDER,
        text
    }
}

const ppkSearch = (text) =>{
    return {
        type : PPK,
        text
    }
}


const reducer = (state= [], action) =>{
    switch(action.type){
        case SEARCH : 
            return [{text:action.text}]
        case CATEGORY : 
            return [{category:action.category}]
        case ORDER :
            return state;
        case PPK : 
            return [{text:action.text}]
        default:
            return state;
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devTools);

export const actionSearch = {
    nomalSearch,
    categorySearch,
    orderSearch,
    ppkSearch,
}
export default store;
