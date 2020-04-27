let setTopPicks = (state, data) => {
    try {
        state.topPicksResult = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setTopPicks;