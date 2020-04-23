import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
let getData = (store) => {
    console.log("<<<PLAYLIST DATA NAME RECEIVING FROM STORE>>", store.playlistModal.playlistData)
    return {
        playlistName: store.playlistModal.playlistData
    }
}

let getFunction = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistItems extends Component {
    render() {
        return (
            <Fragment>
                <ul className="playlistName">
                {this.props.playlistName && this.props.playlistName.map((items, key) => {
                    return(
                        <li key={key}>{items.playlistname}</li>
                    )          
                })}
                </ul>
            </Fragment>

        )
    }
})
