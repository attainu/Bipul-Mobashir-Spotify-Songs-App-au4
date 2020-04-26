let setSavePlaylistData = (state, data) => {
    console.log("SAVE PLAYLIST DATA>>",data)
    try {
        state.savePlaylistData= data;
        return state;
    } catch (error) {
        console.log(error);
    }
    
}

export default setSavePlaylistData;