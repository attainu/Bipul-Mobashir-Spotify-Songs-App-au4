import {combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trending from './trending.js';
import search from './search';
import mediaPlayer from './mediaPlayer';


const rootReducers=combineReducers({
    popular:trending,
    search:search,
    music:mediaPlayer
    
});

export default createStore(rootReducers);

