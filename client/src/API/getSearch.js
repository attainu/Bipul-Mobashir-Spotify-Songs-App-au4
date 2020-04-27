import axios from 'axios';
import API from './api-key';
let getSearch = async (value)=>{
  if(!value.includes("song")){
    value = `${value} song`
  }
let input =encodeURIComponent(value)
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&regionCode=IN&safeSearch=strict&topicId=music&type=video&videoCategoryId=10&key=${API}`);
        return response;
      } catch (error) {
        console.error(error);
      }
}
export default getSearch;