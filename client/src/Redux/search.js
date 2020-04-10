import getSearch from './action/getSearch.js';
let initialState = {
    searchResult:[],
}

function appReducerFunction(state=initialState,action){
    
    switch(action.type){
        case "get_search":
            var newState = getSearch(state);
            return newState;
    }
    return state;
}

export default appReducerFunction;