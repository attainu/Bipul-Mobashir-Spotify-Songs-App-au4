import axios from 'axios';
import API from './api-key';

let getAlbumData = async(value) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${value}&key=${API}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export default getAlbumData;