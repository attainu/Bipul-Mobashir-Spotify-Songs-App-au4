let setAllTopPicks = (state, data) => {

    try {
        state.allTopPicks = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setAllTopPicks;