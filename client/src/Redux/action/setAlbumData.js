let setAlbumData = (state,data)=>{
    console.log("redux data ALBUM DATA>>",data)
    try {
        state.albumData = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAlbumData;