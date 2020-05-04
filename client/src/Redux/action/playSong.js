import axios from 'axios';
let playSong =  (state,payload,data)=>{
    
        try {
          state.song.src =payload;
          let prevState = state.song
          let stateCopy = JSON.parse(JSON.stringify(state));
          stateCopy.song = prevState;
          stateCopy.song.volume = stateCopy.volume;
          stateCopy.songStatus = true;
          stateCopy.image = data.image
          stateCopy.title = data.title
          
          state.song.addEventListener('loadedmetadata',()=>{
            stateCopy.duration = state.song.duration;
              state.song.play()
          })
          
          if(stateCopy.mode){
            stateCopy.mode = false
            return stateCopy;
          }else{
            stateCopy.mode = true
            return stateCopy;
          }
        } catch (error) {
          console.error(error);
        }
      
}
export default playSong;