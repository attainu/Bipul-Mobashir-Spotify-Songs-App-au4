import React, { Component } from 'react';
import {connect} from 'react-redux';
import Volume from './Voulme';
import Slider from './Slider';
var getData = (store)=>{
    return {
        music:store.music
    }
}
var getFunction = (dispatch)=>{
    return{
        play:dispatch,
        pause:dispatch,
        mute:dispatch
    }
}

export default  connect(getData,getFunction)(class MusicPlayer extends Component {
    
    handlePlay = () => {
           let action = {
               type: "play_current"
           }
           this.props.play(action)
        }

   
    handlePause = () => {
        let action = {
            type: "pause_current"
        }
        this.props.pause(action)
     }
    handleMute = () => {
        let action = {
            type: "mute_current"
        }
        this.props.mute(action)
     }
    

    render() {
        return (
            <div className="musicPlayer">
                This is Music player
                {!this.props.music.songStatus && <button onClick={()=>this.handlePlay()}>Play</button> }
                {this.props.music.songStatus && <button onClick={()=>this.handlePause()}>Pause</button> }
                
                <button onClick={()=>this.handleMute()}>Mute</button>
                <Volume/>
                <Slider/>
            </div>
        )
    }
})
