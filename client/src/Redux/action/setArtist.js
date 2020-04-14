let setArtist = (state, data) => {
    console.log("my artist data>",data)
    try {
        state.artistResult = data.data
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setArtist;