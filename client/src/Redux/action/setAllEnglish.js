let setAllEnglish = (state, data) => {
    try {
        state.allEnglish = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setAllEnglish;