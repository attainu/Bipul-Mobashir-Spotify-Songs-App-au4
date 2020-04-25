let hideCardDialog = (state, data) => {
    console.log("DIALOG>>", data);
    try {
       
        state.view = false
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default hideCardDialog;