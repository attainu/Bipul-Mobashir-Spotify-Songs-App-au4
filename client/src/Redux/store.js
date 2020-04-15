import {combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trending from './trending.js';
import search from './search';
import mediaPlayer from './mediaPlayer';
import radio from './radio';
import topPicks from './topPicks.js';
import englishSongs from './englishSongs.js';
import artists from './artists.js';
import auth from './auth.js';
import artistSearchResult from './artistSearchResult.js';
import allTrending from './allTrending.js';


const rootReducers=combineReducers({
    popular:trending,
    search:search,
    music:mediaPlayer,
    radio: radio,
    topPicks: topPicks,
    englishSongs: englishSongs,
    artists: artists,
    auth:auth,
    artistSearchResult: artistSearchResult,
    allTrending: allTrending
});

export default createStore(rootReducers);

