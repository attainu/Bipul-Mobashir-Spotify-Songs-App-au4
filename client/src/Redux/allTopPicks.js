import setAllTopPicks from './action/setAllTopPicks';
let initialState = {
    allTopPicks : []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_all_top_picks":
            var newState = setAllTopPicks(stateCopy, action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;