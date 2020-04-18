import axios from 'axios';
import API from './api-key';
let getAllRadio = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=latest%20hindi%20songs&regionCode=IN&safeSearch=strict&topicId=music&type=video%20&videoCategoryId=10&videoDuration=long&key=${API}`);
        console.log(">>>ALL RADIO>>>",response); 
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getAllRadio;