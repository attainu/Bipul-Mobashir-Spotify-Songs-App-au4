import setAlbum from './action/setAlbum';
let initialState = {
    album:[]
}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_album":
             var newState = setAlbum(stateCopy,action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;