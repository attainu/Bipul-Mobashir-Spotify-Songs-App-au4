import setAllRadio from './action/setAllRadio';

let initialState = {
    allRadio : []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_all_radio":
            var newState = setAllRadio(stateCopy, action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;