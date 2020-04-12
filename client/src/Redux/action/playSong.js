import axios from 'axios';
let playSong = async (state,payload)=>{
    
        try {
          const response = await axios.get(`http://localhost:9000/song?id=${payload}`);
          console.log("this is a res",response);
          state.song.src = response.data;
          state.song.volume = 1;
          var playPromise = state.song.play()
          if (playPromise !== undefined) {
            playPromise
              .then(_ => {
                // Automatic playback started!
                // Show playing UI.
                console.log("audio played auto");
              })
              .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log("playback prevented");
              });
          }
          return state;
        } catch (error) {
          console.error(error);
        }
      
}
export default playSong;