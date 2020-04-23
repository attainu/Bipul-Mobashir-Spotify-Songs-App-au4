let setPlaylistItemsModal = (state, data) => {
    try {
        if(state.playlistItemsModal) {
            state.playlistItemsModal = false;
            return state;
        }
        state.playlistItemsModal = true;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setPlaylistItemsModal;