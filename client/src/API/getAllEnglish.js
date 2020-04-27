import axios from 'axios';
import API from './api-key';
let getAllEnglish = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=10&key=${API}`);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getAllEnglish;