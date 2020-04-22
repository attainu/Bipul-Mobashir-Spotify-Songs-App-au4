import React, { Component, Fragment } from 'react';
import PlaylistInput from './PlaylistInput';
import {connect} from 'react-redux';

let getData = (store)=>{
    console.log("store>>>>>>>>>>>>>>>",store)
    return {
        status:store.playlistModal
    }
}
let getFunction = (dispatch)=>{
 return{
    cross:dispatch
 }
}

export default connect(getData, getFunction)(class PlaylistModal extends Component {
    handleCross = ()=>{
        let action = {
            type:"set_playlist_status"
        }
        this.props.cross(action);
    }
    render() {
        return (
            <Fragment>
            {this.props.status.playlistModal && <div className="playlistModal">
            <div onClick={()=>{this.handleCross()}} className="cross">X</div>
                <PlaylistInput/>
            </div>}
            </Fragment>
        )
    }
})
