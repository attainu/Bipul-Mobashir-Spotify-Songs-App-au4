import playSong from './action/playSong.js';
let initialState = {
    song: new Audio(),
}

function appReducerFunction(state=initialState,action){
    //let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "play_song":
            playSong(state,action.payload)
            return state;
    }
    return state;
}

export default appReducerFunction;