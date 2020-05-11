import React, { Component, Fragment } from 'react';
import PlaylistInput from './PlaylistInput';
import {connect} from 'react-redux';

let getData = (store)=>{
    return {
        status:store.playlistModal,
        message: store.errorHandler,
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
            <i onClick={()=>{this.handleCross()}} className="fas fa-times cross"></i>
                <PlaylistInput/>
                {this.props.message.status && <div className="errorModalPopup">
                    <div className="error">
                    <span className="errorMessage">{this.props.message.message}</span>
                    </div>
                </div>}
            </div>}
            </Fragment>
        )
    }
})
