let setTrending = (state,data)=>{
    try {
        state.trending = data.data.items
        
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setTrending;