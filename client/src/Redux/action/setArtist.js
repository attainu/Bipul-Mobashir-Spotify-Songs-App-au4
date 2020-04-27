let setArtist = (state, data) => {
    try {
        state.artistResult = data.data
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setArtist;