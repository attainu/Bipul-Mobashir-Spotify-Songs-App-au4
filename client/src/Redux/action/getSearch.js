import axios from 'axios';
import API from './../APIKEY/api-key';
let getSearch = async (state)=>{
    var exclude = " -shows -movies -funny -comedy -trailer -news -teaser -sports -cricket -serial -bhojpuri -cartoon -football";
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=chhapak${exclude}&key=${API}`);
        console.log(response);
        state.searchResult = response;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default getSearch;