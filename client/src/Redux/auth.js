import setAuth from './action/setAuth.js';
import setTab from './action/setTab';
let initialState = {
    auth:false,
    login : false,
    loginPage:true,
    signUpPage:false
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
        
    }
    return state;
}
export default appReducerFunction;