let removePlaylistItems = (state, data) => {
    console.log("STATE REMOVE PLAYLIST ITEMS >>",state)
    console.log("DATA>>", data);
    try {
        let index = state.savePlaylistData.map((items)=> {
            return items.trackid;
        }).indexOf(data);
        console.log(index,"myINDEX")
        state.savePlaylistData.splice(index, 1);
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removePlaylistItems;