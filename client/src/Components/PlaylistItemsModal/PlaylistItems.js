import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
let getData = (store) => {
    console.log("<<<PLAYLIST DATA NAME RECEIVING FROM STORE>>", store.playlistModal.playlistData)
    return {
        playlistName: store.playlistModal.playlistData
    }
}

let getFunction = (dispatch) => {
    return {
        modalHide: dispatch
    }
}

export default connect(getData, getFunction)(class PlaylistItems extends Component {
    handlePlaylistItems = () => {
        let action = {
            type:"set_playlistItems_modal"
        }
        this.props.modalHide(action);
    }
    render() {
        return (
            <Fragment>
                <ul className="playlistName">
                {this.props.playlistName && this.props.playlistName.map((items, key) => {
                    return(
                        <Link to={`playlist/${items.id}`}><li onClick={()=> {this.handlePlaylistItems()}} key={key}>{items.playlistname}</li></Link>
                    )          
                })}
                </ul>
            </Fragment>

        )
    }
})
