import axios from 'axios';
import API from './api-key';
let getSearch = async (input)=>{
    var exclude = " -shows -movies -funny -comedy -trailer -news -teaser -sports -cricket -serial -bhojpuri -cartoon -football";
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}${exclude}&key=${API}`);
       // console.log(response);
       return response;
      } catch (error) {
        console.error(error);
      }
}
export default getSearch;