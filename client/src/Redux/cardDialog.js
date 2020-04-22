import setDialog from './action/setDialog';
let initialState = {
   x: "",
   y: "",
   trackid: "",
   imgurl: "",
   view: false
}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "set_dialog":
            var newState = setDialog(stateCopy, action.payload)
                return newState;
       
    }
    return state;
}
export default appReducerFunction;