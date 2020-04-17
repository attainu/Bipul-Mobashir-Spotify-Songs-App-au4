let setSongs = (state, data) => {
    // console.log("set songs data>>", data);
    try {
        state.songs = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setSongs;