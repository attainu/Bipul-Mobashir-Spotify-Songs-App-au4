let setSongs = (state, data) => {
    try {
        state.songs = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setSongs;