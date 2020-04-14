import axios from 'axios';
import API from './api-key';
let getTrending = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=IN&videoCategoryId=10&key=${API}`);
        //console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
}
export default getTrending;