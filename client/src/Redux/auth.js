import setAuth from './action/setAuth.js';
import setTab from './action/setTab';
import setSignup from './action/setSignup';
let initialState = {
    auth:false,
    login : false,
    loginPage:true,
    signUpPage:false,
    name: ""
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_status":
            var newState = setAuth(stateCopy, action.payload);
            return newState;
        case "set_tab":
            var newState = setTab(stateCopy, action.payload);
            return newState;
        case "set_signup":
            var newState = setSignup(stateCopy, action.payload);
            return newState;    
        case "live_status":
            stateCopy.auth = true;
            return stateCopy;
        case "set_logout":
            stateCopy.auth = false;
            localStorage.removeItem("auth-token")
            return stateCopy;    
    }
    return state;
}
export default appReducerFunction;