import axios from 'axios';
import API from './api-key';
let getAllTopPicks = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLe2W59nsdg8nNAPfJUB5GVIzvpJTzSLcR&key=${API}`);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getAllTopPicks;