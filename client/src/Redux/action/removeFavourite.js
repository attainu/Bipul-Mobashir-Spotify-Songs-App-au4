let removeFavourite = (state, data) => {
    try {
        let index = state.allFavourites.map((items) => {
            return items.trackid;
        }).indexOf(data)
        state.allFavourites.splice(index,1); 
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default removeFavourite;