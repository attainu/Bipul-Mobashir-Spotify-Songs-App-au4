let removePlaylist = (state, data) => {
    console.log("removePlAYLIST>>",data, state)
    try {
        let index = state.playlistData.map((items) => {
            console.log("ITEMSSSS>>>",items)
            return items.id;
        }).indexOf(data)
        console.log("INDEX>>", index)
        state.playlistData.splice(index,1); 
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removePlaylist;