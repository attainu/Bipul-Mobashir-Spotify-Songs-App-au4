import setTrending from './action/setTrending.js';
let initialState = {
    trending:[],
    trendingPage:[]
}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_trending": 
             var newState = setTrending(stateCopy,action.payload);
             return newState;
    }
    return state;
}

export default appReducerFunction;