let setAlbum = (state,data)=>{
    console.log("redux data ALBUM>>",data)
    try {
        state.album = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAlbum;