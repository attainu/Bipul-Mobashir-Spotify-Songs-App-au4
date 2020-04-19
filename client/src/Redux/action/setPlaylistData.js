let setPlaylistData = (state, data) => {
    console.log("PLAYLIST DATA>>",data)
    try {
        state.playlistData.push(data);
        state.playlistModal = false;
        return state;
    } catch (error) {
        console.log(error);
    }
    
}

export default setPlaylistData;