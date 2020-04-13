import React, { Component } from 'react';
import {connect} from 'react-redux';
var getData = (store)=>{
    console.log("music Player",store)
    return {
        all:store
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
        url: "mp3",
        song: new Audio()
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

    render() {
        return (
            <div className="musicPlayer">
                This is Music player
                <button onClick={()=>this.handlePlay()}>Play</button>
                <button onClick={()=>this.handlePause()}>Pause</button>
                <button onClick={()=>this.handleMute()}>Mute</button>
            </div>
        )
    }
})
