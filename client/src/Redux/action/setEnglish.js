let setEnglish = (state, data) => {
    try {
        state.englishResult = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setEnglish;