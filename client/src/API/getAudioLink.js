import axios from 'axios';
let getAudioLink = async (id)=>{
    const response = await axios.get(`https://audioserver-musicme.herokuapp.com/song?id=${id}`);
    return response;
}
export default getAudioLink;