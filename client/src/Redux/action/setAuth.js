let setAuth = (state, data) => {
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