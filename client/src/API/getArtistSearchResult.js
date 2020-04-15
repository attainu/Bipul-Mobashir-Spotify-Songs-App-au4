import axios from 'axios';
import API from './api-key';

let getArtistSearch = async (value) => {
    if(value.includes("song")){
        console.log("true")
    }else{
        value = `${value} song`
        console.log("added");
    }
    let input = encodeURIComponent(value)
    console.log("Artist Search Value here...", input);
    let hide = " -bhojpuri";
    let exclude = encodeURIComponent(hide)
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&regionCode=IN&safeSearch=strict&topicId=music&type=video&videoCategoryId=10&maxResults=50&key=${API}`)
        console.log("response in get artist result>>", response);
        return response;
    } catch (error) {
        console.log(error);       
    }
}

export default getArtistSearch;