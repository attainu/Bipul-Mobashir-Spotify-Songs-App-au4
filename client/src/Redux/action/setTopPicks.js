let setTopPicks = (state, data) => {
    console.log("action top picks>>", data);

    try {
        state.topPicksResult = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setTopPicks;