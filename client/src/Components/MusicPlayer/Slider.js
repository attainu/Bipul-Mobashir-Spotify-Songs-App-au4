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
        setTime:null,
        setDuration:null
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
        if(this.props.duration>1200){
            return false
        }
       
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
     color = (el)=>{            
        var valPercent = (el.valueAsNumber  - parseInt(el.min)) / 
                            (parseInt(el.max) - parseInt(el.min));
          var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #29907f), color-stop('+ valPercent+', #f5f6f8));';
          el.style = style;
          return el.style;
        }

      formatTime = secs => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);
      
        if (seconds < 10) seconds = `0${seconds}`;
      
        return `${minutes}:${seconds}`;
      };
    render() {
        console.log(this.props);
        console.log("playing");
        var style = {
            'backgroundImage':`linear-gradient(90deg, #fa2399,#990071 ${(this.props.time/this.props.duration)*100}%,rgb(179, 179, 179) ${(this.props.time/this.props.duration)*100+1}%)`
        }
        
       
        return (
            <div className="mainBar">
            {
                this.props.status  }
                <div className="progress">
                    <span>{this.formatTime(this.props.time)}</span>
                    <span>{this.props.duration>0 && this.formatTime(this.props.duration)}</span>
                </div>
           
                <input style={style} className="progressBar" step={`1`} onChange ={(e)=>{this.handleDuration(e.target.value)}} type = "range" min={`0`} max={ this.props.duration || 100} value={this.props.time}></input>
                
    
            </div>
            
        )
    }
})
