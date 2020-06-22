import axios from 'axios';
let getAudioLink = async (id)=>{
    const response = await axios.get(`http://localhost:9000/song?id=${id}`);
    return response;
}
export default getAudioLink;