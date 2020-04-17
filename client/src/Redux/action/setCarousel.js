let setCarousel = (state, data) => {
    console.log("action carousel songs>>", data.data.items);

    try {
        state.carouselList = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setCarousel;