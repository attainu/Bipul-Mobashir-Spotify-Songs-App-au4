import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import getAllTopPicks from './../../API/getAllTopPicks';
import Card from './Home/Card';

let getdata = (store) => {
    return {
        allTopPicks: store.allTopPicks.allTopPicks
    }
}

let getFunction = (dispatch) => {
    return {
        setAllTopPicks: dispatch
    }
}

export default connect(getdata, getFunction)(class TopPicksAllResult extends Component {

    componentDidMount = () => {
        let data = getAllTopPicks();
        data.then(res => {
            console.log("ALL TOP PICKS",res)
            let action = {
                type: "set_all_top_picks",
                payload: res
            }
            this.props.setAllTopPicks(action);
        })
    }
    render() {
        return (
            <Fragment>
                 <h3>All Top Picks</h3>
                 {this.props.allTopPicks && this.props.allTopPicks.map((items,key)=>{
                    
                    return(
                        <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.medium.url} title={"a"} duration={"a"}/>
                    )
                })}
           </Fragment>
        )
    }
})
