import playSong from './action/playSong.js';
let initialState = {
    song: new Audio(),
}

function appReducerFunction(state=initialState,action){
    //let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "play_song":
            console.log("Play song....song",action);
            playSong(state,action.payload)
            return state;
        case "pause_current":
            state.song.pause()
            return state;
        case "play_current":
            state.song.play()
            return state
        case "mute_current":
            if(state.song.muted){
                state.song.muted = false
            }else{
                state.song.muted = true
            }
            return state
    }
    return state;
}

export default appReducerFunction;