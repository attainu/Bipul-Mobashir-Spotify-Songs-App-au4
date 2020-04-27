let removePlaylistItems = (state, data) => {
    try {
        let index = state.savePlaylistData.map((items)=> {
            return items.trackid;
        }).indexOf(data);
        state.savePlaylistData.splice(index, 1);
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removePlaylistItems;