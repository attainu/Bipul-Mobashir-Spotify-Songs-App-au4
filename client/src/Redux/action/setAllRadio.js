let setAllRadio = (state, data) => {
    try {
        state.allRadio = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setAllRadio;