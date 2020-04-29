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
                <div className="songPic">
                        <img src="https://i.ytimg.com/vi/QiBeywmJoRY/mqdefault.jpg"/>
                        <span>This is a title of is a title ofis a title ofis a title of song</span>
                    </div>
                <div className="middle">
                <Slider/>
                <div className="mediaActions">
                {!this.props.music.songStatus && <button onClick={()=>this.handlePlay()}>Play</button> }
                {this.props.music.songStatus && <button onClick={()=>this.handlePause()}>Pause</button> }
                </div>
                </div>
                
                <div className="media">
                    
                
                
                <button onClick={()=>this.handleMute()}>Mute</button>

                <Volume/>
                </div>
            </div>
        )
    }
})
