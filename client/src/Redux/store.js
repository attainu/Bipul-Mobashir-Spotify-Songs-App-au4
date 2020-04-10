import {combineReducers,createStore} from 'redux';

import trending from './trending.js';


const rootReducers=combineReducers({
    popular:trending
    
});

export default createStore(rootReducers);

