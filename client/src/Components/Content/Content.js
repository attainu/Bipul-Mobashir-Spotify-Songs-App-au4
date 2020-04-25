import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home.js';
import SearchResult from './SearchResult';
import ArtistResult from './ArtistResult';
import ArtistSearchResult from './ArtistSearchResult';
import TrendingAllResult from './TrendingAllResult';
import SongsResult from './SongsResult';
import Favourite from './Favourite';
import RadioAllResult from './RadioAllResult';
import EnglishAllResult from './EnglishAllResult';
import TopPicksAllResult from './TopPicksAllResult.js';
import AlbumResult from './AlbumResult';
import AlbumData from './AlbumData';
import PlaylistDataResult from './../PlaylistItemsModal/PlaylistDataResult'

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
                            <Route path="/radio" exact component={RadioAllResult}/>
                            <Route path="/english-song" exact component={EnglishAllResult}/>
                            <Route path="/top-picks" exact component={TopPicksAllResult}/>
                            <Route path="/album" exact component={AlbumResult}/>
                            <Route path="/album/:value" exact component={AlbumData}/>
                            <Route path="/playlist/:value" exact component={PlaylistDataResult}/>
                            

                        </Switch>
                       
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}



    
    


