import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';

let getData = (store)=>{
    return{
        
        music: store.music,
    }

}
export default connect(getData)( class PlayPause extends Component {
    render() {
        console.log("play pause",this.props);
        return (
            <Fragment>
                { this.props.music.songId && this.props.music.songId === this.props.id &&
                <div id="play-video" class="video-pause-button" >
                <span></span>
                <span></span>
                </div>}
                { !this.props.music.songId || (this.props.music.songId && this.props.music.songId !== this.props.id &&
                <div id="play-video" class="video-play-button" >
                <span></span>
                
                </div>)}
            </Fragment>
        )
    }
})
