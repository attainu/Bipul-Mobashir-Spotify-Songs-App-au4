import setArtistSearchResult from './action/setArtistSearchResult.js';
let initialState = {
    artistSearchResult : []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_artist_search_result":
            var newState = setArtistSearchResult(stateCopy, action.payload);
            return newState;
    }
    return state;
}

export default appReducerFunction;