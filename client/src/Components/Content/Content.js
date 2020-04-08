import React, { Component, Fragment } from 'react';

import Home from './Home/Home.js';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="home">
                    <div className="upperSpaceHome">

                    </div>
                    <div className="homeContent">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                        </Router>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}



    
    


