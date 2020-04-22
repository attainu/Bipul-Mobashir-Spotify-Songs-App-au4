import setAllFavourites from './action/setAllFavourites';
let initialState = {
    allFavourites: []
}

function appReducerFunction(state = initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case "set_all_favourites":
            var newState = setAllFavourites(stateCopy, action.payload);
            return newState;
    }
    return state;

}

export default appReducerFunction;