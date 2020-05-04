import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import getTopPicks from './../../../API/getTopPicks.js';
import Card from './Card.js';
import {Link} from 'react-router-dom';

let getData = (store) => {
    return {
        topPicks: store.topPicks.topPicksResult
    }
}

let getFunction = (dispatch) => {
    return {
        setTopPicks: dispatch
    }
}

export default connect(getData, getFunction)(class TopSongs extends Component {

    componentDidMount = () => {
        let data = getTopPicks()
        data.then(res => {
            let action = {
                type: "set_top_picks",
                payload: res
            }
            this.props.setTopPicks(action);
        })
    }
    render() {
        return (
            
            <Fragment>
               <div className="rowHeader">
                    <span>Top Picks</span>
                    <Link to="/top-picks"><div>See All</div></Link>
                </div>
                <div className="rowBody">
            {this.props.topPicks && this.props.topPicks.map((items, key) => {
                return (
                    <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={items.snippet.title} duration={"a"}/>
                )
            })}
            </div>
            </Fragment>
            
        )
    }
})
