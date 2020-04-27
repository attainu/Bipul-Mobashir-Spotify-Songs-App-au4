let setAlbumData = (state,data)=>{
    try {
        state.albumData = data.data.items;
        return state;
      } catch (error) {
        console.log(error);
      }
}
export default setAlbumData;