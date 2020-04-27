let setTab = (state, data) => {
    try {
        if(state.loginPage){
            state.loginPage = false
            state.signUpPage = true
            return state
        }
        state.loginPage = true
        state.signUpPage = false
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setTab;