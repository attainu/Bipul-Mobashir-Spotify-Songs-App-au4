
let setTrending = (state,data)=>{
    
    try {
        state.trending = data.data.items.slice(0,7);
        state.trendingPage = data.data.items
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default setTrending;