
let setTrending = (state,data)=>{
    
    try {
        state.trending = data;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default setTrending;