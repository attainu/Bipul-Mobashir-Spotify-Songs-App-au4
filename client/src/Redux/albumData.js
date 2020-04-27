import setAlbumData from './action/setAlbumData';
let initialState = {
    albumData:[]
}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_album_data":
             var newState = setAlbumData(stateCopy,action.payload);
             return newState;
    }
    return state;
}

export default appReducerFunction;