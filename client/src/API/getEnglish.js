import axios from 'axios';
import API from './api-key';
let getEnglish = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&regionCode=US&videoCategoryId=10&key=${API}`);
        // console.log(response);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getEnglish;