let initialState = {
    message: "",
    status: false
}
function appReducerFunction(state=initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case "set_error_message":
            stateCopy.message = action.payload
            stateCopy.status = true
            return stateCopy
        case "set_hide_error_message":
            if(stateCopy.status === true){
                stateCopy.status = false
                return stateCopy    
            }
    }
    return state;
}

export default appReducerFunction;