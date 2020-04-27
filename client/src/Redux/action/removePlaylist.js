let removePlaylist = (state, data) => {
    try {
        let index = state.playlistData.map((items) => {
            return items.id;
        }).indexOf(data)
        state.playlistData.splice(index,1); 
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removePlaylist;