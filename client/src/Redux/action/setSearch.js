
let setSearch =  (state,data)=>{
    
    try {
        state.searchResult = data;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default setSearch;