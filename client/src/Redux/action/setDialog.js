let setDialog = (state, data) => {
    console.log("DIALOG>>", data);
    try {
        state.x = data.x
        state.y = data.y
        state.trackid = data.trackid
        state.imgurl = data.imgurl
        state.view = true
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setDialog;