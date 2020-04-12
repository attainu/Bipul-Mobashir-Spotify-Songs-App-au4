import setEnglish from './action/setEnglish.js';
let initialState = {
    englishResult: []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_english":
            var newState = setEnglish(stateCopy, action.payload);
            return newState;
    }
    return state;
}
export default appReducerFunction;