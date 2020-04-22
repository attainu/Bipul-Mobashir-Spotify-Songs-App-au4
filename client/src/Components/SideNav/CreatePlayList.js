import React, { Component } from 'react'
import {connect} from 'react-redux';

let getData = (store)=>{
    console.log("playlist button store>>>",store);
    return {
        status:store.playlistModal
    }
}
let getFunction = (dispatch)=>{
 return{
    modal:dispatch,
 }
}

export default connect(getData, getFunction)(class CreatePlayList extends Component {
    handlePlaylistButton = () => {
        let action = {
            type: "set_playlist_status"
        }
        this.props.modal(action);
    }

    render() {
        return (
            <div className="createPlaylist">
                <button className="playlist_button" onClick={() => {this.handlePlaylistButton()}}>Create Playlist</button>
            </div>
        )
    }
})
