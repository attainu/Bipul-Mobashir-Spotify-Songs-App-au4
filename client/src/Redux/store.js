import {combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trending from './trending.js';
import search from './search';
import mediaPlayer from './mediaPlayer';
import radio from './radio';
import topPicks from './topPicks.js';
import englishSongs from './englishSongs.js';


const rootReducers=combineReducers({
    popular:trending,
    search:search,
    music:mediaPlayer,
    radio: radio,
    topPicks: topPicks,
    englishSongs: englishSongs
});

export default createStore(rootReducers);

