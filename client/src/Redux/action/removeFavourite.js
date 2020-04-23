let removeFavourite = (state, data) => {
    console.log("removeFAVOURITE>>",data, state.allFavourites)
    try {
        let index = state.allFavourites.map((items) => {
            console.log("ITEMSSSS>>>",items.trackid)
            return items.trackid;
        }).indexOf(data)
        console.log("INDEX>>", index)
        state.allFavourites.splice(index,1); 
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removeFavourite;