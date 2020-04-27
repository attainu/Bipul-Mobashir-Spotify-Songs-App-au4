let setRadio = (state, data) => {
    try {
        state.radioResult = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setRadio;