let setAllFavourites = (state, data) => {
    console.log("SET FAVOU>>", data)
    try {
        state.allFavourites = data.data;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setAllFavourites;