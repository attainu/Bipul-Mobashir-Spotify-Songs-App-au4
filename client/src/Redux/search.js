import setSearch from './action/setSearch.js';
let initialState = {
    searchResult:[],
}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_search":
            var newState = setSearch(stateCopy,action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;