import axios from 'axios';
import API from './api-key';
let getRadio = async ()=>{
    
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLe2W59nsdg8kysfhgEJsBGo9_ghpFEiJt&key=${API}`);
        //console.log(response); 
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getRadio;