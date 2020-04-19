import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home.js';
import SearchResult from './SearchResult';
import ArtistResult from './ArtistResult';
import ArtistSearchResult from './ArtistSearchResult';
import TrendingAllResult from './TrendingAllResult';
import SongsResult from './SongsResult';
import Favourite from './Favourite';

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="home">
                    <div className="upperSpaceHome">

                    </div>
                    <div className="homeContent">
                    
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/search/:value" exact component={SearchResult}/>
                            <Route path="/artist" exact component={ArtistResult}/>
                            <Route path="/artist/:value" exact component={ArtistSearchResult} />
                            <Route path="/trending" exact component= {TrendingAllResult}/>
                            <Route path="/songs" exact component={SongsResult}/>
                            <Route path="/favourite" exact component={Favourite}/>
                        </Switch>
                       
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}



    
    


