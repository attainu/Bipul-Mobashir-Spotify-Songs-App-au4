import React, { Component } from 'react';
import {connect} from 'react-redux';
var getData = (store)=>{
    console.log("music Player>>>>",store.music)
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
    state={
    
    }
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
    
   
    componentDidMount = ()=>{
        // let action = {
        //     type:"play_song",
        //     payload:"kJQP7kiw5Fk"
        // }
        // this.props.playSong(action);
    }
    componentDidUpdate = ()=>{
        console.log("CDU here",this.props.music);
    }

    render() {
        return (
            <div className="musicPlayer">
                This is Music player
                {!this.props.music.songStatus && <button onClick={()=>this.handlePlay()}>Play</button> }
                {this.props.music.songStatus && <button onClick={()=>this.handlePause()}>Pause</button> }
                
                <button onClick={()=>this.handleMute()}>Mute</button>
            </div>
        )
    }
})
