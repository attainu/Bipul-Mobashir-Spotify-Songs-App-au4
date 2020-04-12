let setEnglish = (state, data) => {
    console.log("action english songs>>", data.data.items);

    try {
        state.englishResult = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setEnglish;