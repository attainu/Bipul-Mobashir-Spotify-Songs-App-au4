import axios from 'axios';

let getArtist = async () => {
    try {
        const response = await axios.get('https://server-musicme.herokuapp.com/getAllArtists');
        return response;
    } catch (error) {
        console.log(error)
    }

}
export default getArtist;