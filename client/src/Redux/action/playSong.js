import axios from 'axios';
let playSong =  (state,payload)=>{
    
        try {
          // const response = await axios.get(`http://localhost:9000/song?id=${payload}`);
          // console.log("this is a res",response);
          state.song.src =payload;
          let prevState = state.song
          let stateCopy = JSON.parse(JSON.stringify(state));
          stateCopy.song = prevState;
          stateCopy.song.volume = stateCopy.volume;
          stateCopy.songStatus = true;
          
          
          state.song.addEventListener('loadedmetadata',()=>{
            stateCopy.duration = state.song.duration;
            console.log("duration >>>>>>>>>>>>>",parseInt(state.song.duration))
            state.song.play()
            
          })
          
          
            
            
           
          
          
          // if (playPromise !== undefined) {
          //   playPromise
          //     .then(_ => {
                
          //       // Automatic playback started!
          //       // Show playing UI.
          //       console.log("audio Playing");
          //       //return stateCopy;
          //     })
          //     .catch(error => {
          //       // Auto-play was prevented
          //       // Show paused UI.
          //       console.log("playback prevented");
          //     });
          // }
          console.log("a>>>>>>>>>>>>>sdcfv",stateCopy)
          if(stateCopy.mode){
            stateCopy.mode = false
            console.log("setting false")
            return stateCopy;
          }else{
            stateCopy.mode = true
            console.log("setting true")
            return stateCopy;
          }
          //return stateCopy;
        } catch (error) {
          console.error(error);
        }
      
}
export default playSong;