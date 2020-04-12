let setRadio = (state, data) => {
    console.log("action radio data>>",data)
    try {
        state.radioResult = data.data.items;
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setRadio;