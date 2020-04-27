import setAllEnglish from './action/setAllEnglish';

let initialState = {
    allEnglish : []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_all_english":
            var newState = setAllEnglish(stateCopy, action.payload);
            return newState;
    }
    return state;

}

export default appReducerFunction;