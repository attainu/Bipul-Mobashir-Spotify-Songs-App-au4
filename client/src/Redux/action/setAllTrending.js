let setAllTrending = (state,data)=>{
    console.log("redux data trending>>",data.data.items)
    try {
        state.allTrending = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAllTrending;