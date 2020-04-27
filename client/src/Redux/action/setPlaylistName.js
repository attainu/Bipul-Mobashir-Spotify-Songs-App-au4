let setPlaylistName = (state, data) => {
    try {
        state.playlistData = data.data;
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setPlaylistName;