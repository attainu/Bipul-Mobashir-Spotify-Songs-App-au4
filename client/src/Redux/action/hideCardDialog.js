let hideCardDialog = (state, data) => {
    try {
        state.view = false
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default hideCardDialog;