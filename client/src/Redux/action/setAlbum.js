let setAlbum = (state,data)=>{
    try {
        state.album = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAlbum;