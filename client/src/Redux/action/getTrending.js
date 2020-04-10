import axios from 'axios';
import API from './../APIKEY/api-key';
let getTrending = async (state)=>{
    var exclude = " -shows -movies -funny -comedy -trailer -news -teaser -sports -cricket -serial -bhojpuri -cartoon -football";
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=kabir%20singh${exclude}&safeSearch=strict&videoDuration=any&key=${API}`);
        console.log(response);
        state.trending = response;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default getTrending;