let setCarousel = (state, data) => {
    try {
        state.carouselList = data.data.items
        return state;
    } catch (error) {
        console.log(error);
    }
}

export default setCarousel;