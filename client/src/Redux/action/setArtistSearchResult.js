let setArtistSearchResult = (state, data) => {
    console.log("setArtistSearchResult>>", data.data.items);
    try {
        state.artistSearchResult = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setArtistSearchResult;