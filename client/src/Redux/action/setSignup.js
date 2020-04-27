import setToken from './../Token/setToken';
let setSignup = (state, data) => {
    try {
        setToken(data.auth, data.name)
        state.auth = true;
        state.login = false;
        state.name = data.name
        return state;
    } catch (error) {
        console.log(error);
    }
}
export default setSignup;