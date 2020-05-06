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

    state={
        status: true
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
        if(this.state.status){
            this.setState({
                status: false
            })
        }else{
            this.setState({
                status: true
            })
        }
        
        let action = {
            type: "mute_current"
        }
        this.props.mute(action)
     }
    

    render() {
        
        return (
            <div className="musicPlayer">
                <div className="songPic">
                        <img src={`${this.props.music.image}`}/>
                        <span>{this.props.music.title}</span>
                    </div>
                <div className="middle">
                <Slider/>
                <div className="mediaActions">
                <span className="circle" ></span>
                {!this.props.music.songStatus && <div className="play" onClick={()=>this.handlePlay()}></div> }
                
                {this.props.music.songStatus && <div className="pause" onClick={()=>this.handlePause()}></div> }
                </div>
                </div>
                
                <div className="media">
                    {!this.state.status && <i className="fas fa-volume-mute volumeMuteUnmute" onClick={()=>this.handleMute()}></i>}
                    {this.state.status && <i className="fas fa-volume-down volumeMuteUnmute" onClick={()=>this.handleMute()}></i>}
                <Volume/>
                </div>
            </div>
        )
    }
})
