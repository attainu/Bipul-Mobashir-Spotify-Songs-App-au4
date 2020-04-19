let setPlaylistName = (state, data) => {
    console.log("<<<<PLAYLIST NAME>>>", data);
    try {
        state.playlistData = data.data;
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setPlaylistName;