import setDialog from './action/setDialog';
import hideCardDialog from './action/hideCardDialog';
let initialState = {
   x: "",
   y: "",
   trackid: "",
   imgurl: "",
   trackname: "",
   view: false
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_dialog":
            var newState = setDialog(stateCopy, action.payload)
                return newState;
        case "hide_card_dialog":
            var newState = hideCardDialog(stateCopy, action.payload)
                return newState;
        

       
    }
    return state;
}
export default appReducerFunction;