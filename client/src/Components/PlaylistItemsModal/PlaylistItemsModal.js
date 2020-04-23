import React, { Component, Fragment } from 'react';
import PlaylistItems from './PlaylistItems';
import {connect} from 'react-redux';

let getData = (store)=>{
    console.log("STORE ITEMS RECEIVE>>",store)
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
            type:"set_playlistItems_modal"
        }
        this.props.cross(action);
    }
    render() {
        return (
            <Fragment>
            {this.props.status.playlistItemsModal && <div className="playlistModal">
            <div onClick={()=>{this.handleCross()}} className="cross">X</div>
                <PlaylistItems/>
            </div>}
            </Fragment>
        )
    }
})
