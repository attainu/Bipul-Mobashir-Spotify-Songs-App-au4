let setAuth = (state, data) => {
    //console.log("action english songs>>", data.data.items);

    try {
        if(state.login){
            state.login = false
            return state
        }
        state.login = true
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setAuth;