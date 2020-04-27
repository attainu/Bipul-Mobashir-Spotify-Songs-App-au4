let setSearch =  (state,data)=>{
    try {
        state.searchResult = data.data.items;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default setSearch;