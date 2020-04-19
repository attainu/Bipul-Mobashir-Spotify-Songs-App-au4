import setCarousel from './action/setCarousel.js';
let initialState = {
    carouselList: []
}

function appReducerFunction(state= initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_carousel":
            var newState = setCarousel(stateCopy, action.payload);
            return newState;
    }
    return state;
}
export default appReducerFunction;