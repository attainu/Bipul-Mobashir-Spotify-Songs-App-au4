let setSavePlaylistData = (state, data) => {
    try {
        state.savePlaylistData= data;
        return state;
    } catch (error) {
        console.log(error);
    }
    
}

export default setSavePlaylistData;