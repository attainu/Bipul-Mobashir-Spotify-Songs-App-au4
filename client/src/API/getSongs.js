import axios from 'axios';
import API from './api-key';

let getSongs = async () => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&publishedAfter=2019-01-01T19%3A03%3A37.000Z&q=hindi%20bollywood%20songs&regionCode=IN&safeSearch=strict&topicId=music&type=video&videoCategoryId=10&videoDuration=short&key=${API}`);
        console.log("response in getSongs>>", response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default getSongs;