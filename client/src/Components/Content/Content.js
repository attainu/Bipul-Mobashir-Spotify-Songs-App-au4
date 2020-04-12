import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home.js';
import SearchResult from './SearchResult';

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
                            
                        </Switch>
                       
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}



    
    


