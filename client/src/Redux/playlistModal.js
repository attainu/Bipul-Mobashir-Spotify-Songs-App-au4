import setPlaylistModal from './action/setPlaylistModal';

let initialState = {
    playlistModal : false,

}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_playlist_status":
            var newState = setPlaylistModal(stateCopy, action.payload);
            return newState;
    }
    return state;

}

export default appReducerFunction;