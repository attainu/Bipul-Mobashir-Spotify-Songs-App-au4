let setAllEnglish = (state, data) => {
    console.log("ENGLISH SONG DATA>>", data)
    try {
        state.allEnglish = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setAllEnglish;