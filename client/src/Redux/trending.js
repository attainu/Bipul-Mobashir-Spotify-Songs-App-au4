import getTrending from './action/getTrending.js';
let initialState = {
    trending:[],
    trendingPage:[]
}

function appReducerFunction(state=initialState,action){
    
    switch(action.type){
        case "get_trending":
            var newState = getTrending(state);
            return newState;
    }
    return state;
}

export default appReducerFunction;