import playSong from './action/playSong.js';
let initialState = {
    song: new Audio(),
    songStatus: false,
    songId:"",
    volume:1,
    duration:"",
    currentTime : 0 ,
    mode:false
}

function appReducerFunction(state=initialState,action){
    let prevState = state.song
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.song = prevState
    switch(action.type){
        case "play_song":
            console.log("Play song....song",action);
            var newState = playSong(state,action.payload)
            return newState;
        case "pause_current":
            stateCopy.songStatus=false
            state.song.pause()
            return stateCopy;
        case "play_current":
            stateCopy.songStatus=true
            stateCopy.song.play()
            if(stateCopy.mode){
                stateCopy.mode = false
            }else{
                stateCopy.mode = true
            }
            return stateCopy;
        case "mute_current":
            if(state.song.muted){
                state.song.muted = false
            }else{
                state.song.muted = true
            }
            return state
        case "volume":
            stateCopy.volume = action.payload
            stateCopy.song.volume = action.payload
            return stateCopy
        case "current_time":
            stateCopy.currentTime = stateCopy.song.currentTime 
            return stateCopy;

    }
    return state;
}

export default appReducerFunction;