import setAllTrending from './action/setAllTrending.js';
let initialState = {
    allTrending:[]
}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_all_trending":
             var newState = setAllTrending(stateCopy,action.payload);
            console.log("newstate" ,newState);
            return newState;
    }
    return state;
}

export default appReducerFunction;