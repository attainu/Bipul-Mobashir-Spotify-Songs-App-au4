import setSongs from './action/setSongs';

let initialState = {
    songs: []
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case "set_songs":
            var newState = setSongs(stateCopy, action.payload);
            return newState;
    }
    return state;

}

export default appReducerFunction;