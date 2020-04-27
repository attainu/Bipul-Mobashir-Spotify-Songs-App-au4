let setAllTrending = (state,data)=>{
    try {
        state.allTrending = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAllTrending;