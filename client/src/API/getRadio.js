import axios from 'axios';
import API from './api-key';
let getRadio = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=latest%20hindi%20songs&regionCode=IN&safeSearch=strict&topicId=music&type=video%20&videoCategoryId=10&videoDuration=long&key=${API}`);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getRadio;