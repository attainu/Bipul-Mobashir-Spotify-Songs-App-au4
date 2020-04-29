import React, { Component } from 'react';
import {connect } from 'react-redux';

var getData = (store)=>{
    return {
        time:store.music.currentTime,
        duration:store.music.duration,
        status:store.music.songStatus,
        mood:store.music.mode,
    }
}
var getFunction = (dispatch)=>{
    return{
        timer :dispatch,
        stop: dispatch,
        changeDuration: dispatch
    }
}

export default connect(getData,getFunction)(class Volume extends Component {
      
    state={
        setTime:null
    }
    time = ()=>{
        setInterval(()=>{
            let action = {
                type:"current_time"
            }
            this.props.timer(action);
        },1000)
    }

    handleDuration = (value) => {
        let action = {
            type:"change_duration",
            payload: value
        }
        this.props.changeDuration(action);
    }
 

     componentDidUpdate = (prevProps)=>{
      
        if(this.props.duration === this.props.time && this.props.status && this.props.time > 1){
            let action = {
                type: "stop_current"
            }
            this.props.stop(action);
        }
         if(this.props.status && prevProps.mood !== this.props.mood){
             if(this.state.setTime){
                 clearInterval(this.state.setTime)
             }
          this.state.setTime = setInterval(()=>{
             let action = {
                 type:"current_time"
             }
             this.props.timer(action);
         },1000)
         }
         
         if(!this.props.status && prevProps.mood === this.props.mood ){
            if(this.state.setTime){
                clearInterval(this.state.setTime)
            }
         }
     }
    render() {
       
        return (
            <div>
            {
                this.props.status  }
           
                <input step={`1`} onChange={(e)=>{this.handleDuration(e.target.value)}} type = "range" min={`0`} max={ this.props.duration } value={this.props.time}></input>
    
            </div>
            
        )
    }
})
