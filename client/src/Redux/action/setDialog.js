let setDialog = (state, data) => {
    try {
        state.x = data.x
        state.y = data.y
        state.trackid = data.trackid
        state.imgurl = data.imgurl
        state.trackname = data.trackname
        state.view = true
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setDialog;