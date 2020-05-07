import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import MusicPlayer from './MusicPlayer';
var getData = (store)=>{
    return {
        music:store.music
    }
}
export default connect(getData)( class MusicNav extends Component {
    render() {
        return (
            <Fragment>
                {this.props.music.showPlayer && <MusicPlayer/>}
            </Fragment>
        )
    }
})
