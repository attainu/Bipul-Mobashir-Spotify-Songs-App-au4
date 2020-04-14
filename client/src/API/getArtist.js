import axios from 'axios';

let getArtist = async () => {
    try {
        const response = await axios.get('http://localhost:5555/getAllArtists');
        return response;
    } catch (error) {
        console.log(error)
    }

}
export default getArtist;