import axios from 'axios';
import API from './api-key';
let getAlbum = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=20&channelId=UCq-Fj5jknLsUf-MWSy4_brA&key=${API}`);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
}
export default getAlbum;