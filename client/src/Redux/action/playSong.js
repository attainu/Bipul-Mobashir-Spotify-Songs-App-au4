import axios from 'axios';
let playSong = async (state,payload)=>{
    
        try {
          const response = await axios.get(`http://localhost:9000/song?id=${payload}`);
          console.log("this is a res",response);
          state.song.src = response.data;
          state.song.volume = 1;
          state.song.play()
          return state;
        } catch (error) {
          console.error(error);
        }
      
}
export default playSong;