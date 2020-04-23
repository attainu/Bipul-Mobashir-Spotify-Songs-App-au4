import setPlaylistModal from './action/setPlaylistModal';
import setPlaylist from './action/setPlaylistData';
import setPlaylistName from './action/setPlaylistName';
import setPlaylistItemsModal from './action/setPlaylistItemsModal';

let initialState = {
    playlistModal : false,
    playlistItemsModal : false,
    playlistData: []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_playlist_status":
            var newState = setPlaylistModal(stateCopy, action.payload);
            return newState;
         case "set_playlist_data":
            var newState = setPlaylist(stateCopy, action.payload);
            return newState;
         case "set_playlist_name":
             var newState = setPlaylistName(stateCopy, action.payload);
             return newState;
         case "set_playlistItems_modal":
             var newState = setPlaylistItemsModal(stateCopy, action.payload);
             return newState;   
    }
    return state;

}

export default appReducerFunction;