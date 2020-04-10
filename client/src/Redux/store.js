import {combineReducers,createStore} from 'redux';

import trending from './trending.js';
import search from './search';


const rootReducers=combineReducers({
    popular:trending,
    search:search
    
});

export default createStore(rootReducers);

