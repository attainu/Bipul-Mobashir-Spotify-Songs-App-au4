import setToken from './../Token/setToken';
let setSignup = (state, data) => {
    console.log("inside state>>",state, data)
    try {
        setToken(data.auth)
        state.auth = true;
        state.login = false;
        state.name = data.name
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setSignup;