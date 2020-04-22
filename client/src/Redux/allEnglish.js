import setAllEnglish from './action/setAllEnglish';

let initialState = {
    allEnglish : []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_all_english":
            var newState = setAllEnglish(stateCopy, action.payload);
            console.log("ALL ENGLISH newstate" ,newState);
            return newState;
    }
    return state;

}

export default appReducerFunction;