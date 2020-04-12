import React, { Component, Fragment } from 'react'
import RadioNav from './../../RadioNav/RadioNav.js';
import Carousel from './Carousel.js';
import Trending from './Trending.js';
import TopPicks from './TopPicks.js';
import EnglishSongs from './EnglishSongs.js';
export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="firstRowHOme">
                    <div className="carousel">
                        <Carousel/>
                    </div>
                    <div className="radioNav">
                       <RadioNav/>
                    </div>

                </div>
                <div className="trending">
                    <Trending/>
                </div>
                <div className="top-picks">
                    <TopPicks/>
                </div>
                <div className="english-songs">
                    <EnglishSongs/>
                </div>
            </Fragment>
        )
    }
}
