import setArtist from './action/setArtist.js';
let initialState = {
    artistResult : []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_artist":
            var newState = setArtist(stateCopy, action.payload);
            return newState;
    }
    return state;
}
export default appReducerFunction;