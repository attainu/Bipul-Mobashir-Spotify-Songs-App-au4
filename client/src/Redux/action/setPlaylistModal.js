let setPlaylistModal = (state, data) => {
    try {
        if(state.playlistModal) {
            state.playlistModal = false;
            return state;
        }
        state.playlistModal = true;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setPlaylistModal;