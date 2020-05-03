import React, { Component } from 'react'
import {connect} from 'react-redux';

let getData = (store)=>{
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
                <hr className="Rootlist_divider"></hr>
                <div className="parent_playlist_div" onClick={() => {this.handlePlaylistButton()}}>
                <button className="playlist_button" ><i class="fas fa-plus"></i></button>
                <span className="create_playlist_button_text">Create Playlist</span>
                </div>
            </div>
        )
    }
})
