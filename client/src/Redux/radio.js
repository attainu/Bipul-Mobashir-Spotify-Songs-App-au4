import setRadio from './action/setRadio.js';

let initialState = {
    radioResult : []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_radio":
            var newState = setRadio(stateCopy, action.payload);
            return newState
    }
    return state;
}

export default appReducerFunction;