import setTopPicks from './action/setTopPicks.js';
let initialState = {
    topPicksResult : []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_top_picks":
            var newState = setTopPicks(stateCopy, action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;