import axios from 'axios';

let getTrending = async (state)=>{
    let API = ["AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw","AIzaSyBid_oWQlp8SLivVL6An8MKMiVDKxXKX8Q","AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc"]
    console.log(API);
    let randomElement = API[Math.floor(Math.random() * API.length)];
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=kabir%20singh&safeSearch=strict&videoDuration=any&key=${randomElement}`);
        console.log(response);
        state.trending = response;
        return state;
      } catch (error) {
        console.error(error);
      }
}
export default getTrending