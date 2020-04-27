let setPlaylistData = (state, data) => {
    try {
        state.playlistData.push(data);
        state.playlistModal = false;
        return state;
    } catch (error) {
        console.log(error);
    }
    
}

export default setPlaylistData;