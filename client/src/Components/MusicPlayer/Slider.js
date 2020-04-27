import React, { Component } from 'react';
import {connect } from 'react-redux';

var getData = (store)=>{
   // console.log("music Player>>>>",store.music)
    return {
        time:store.music.currentTime,
        duration:store.music.duration,
        status:store.music.songStatus,
        mood:store.music.mode
    }
}
var getFunction = (dispatch)=>{
    return{
        timer :dispatch
    }
}

export default connect(getData,getFunction)(class Volume extends Component {
      
    state={
        setTime:null
    }
    time = ()=>{
        console.log("time is calling .........")
        setInterval(()=>{
            let action = {
                type:"current_time"
            }
             console.log(this.props.time);
             console.log(this.props.duration);
            this.props.timer(action);
        },1000)
    }

    componentDidMount = ()=>{
        // console.log("CDM yaha h",this.props);
        // let setTime = setInterval(()=>{
        //     let action = {
        //         type:"current_time"
        //     }
        //      console.log(this.props.time);
        //      console.log(this.props.duration);
        //     this.props.timer(action);
        // },1000)
        
    }
    componentWillReceiveProps = (prevProps)=>{
        
        // if(this.props.status && prevProps.mood !== this.props.mood){
        //     console.log("i am in If")
        //     var setTime = setInterval(()=>{
        //         let action = {
        //             type:"current_time"
        //         }
        //          console.log(this.props.time);
        //          console.log(this.props.duration);
        //         this.props.timer(action);
        //     },1000)
        // }else{
        //     console.log("i am in else")
        //     console.log(setTime);
        //     clearInterval(setTime);
        // }
    }
    componentWillUnmount = ()=>{
        console.log("CWU yaha h");
    }
    

     componentDidUpdate = (prevProps)=>{
          console.log("CDU yaha h",prevProps,this.props);
          
        
         if(this.props.status && prevProps.mood !== this.props.mood){
             console.log("I am inside if>>>>>????")
             if(this.state.setTime){
                 clearInterval(this.state.setTime)
             }
          this.state.setTime = setInterval(()=>{
             console.log("setting Time");
             let action = {
                 type:"current_time"
             }
              console.log("current_time",this.props.time);
              console.log("song_durationt",this.props.duration);
             this.props.timer(action);
         },1000)
         }
         
         if(!this.props.status && prevProps.mood === this.props.mood ){
            if(this.state.setTime){
                console.log("clearing time Interval");
                clearInterval(this.state.setTime)
            }
         }
     }
    render() {
       
        return (
            <div>
            {
                this.props.status  }
           
        <input step={`1`} onChange={(e)=>{console.log(e.target.value)}} type = "range" min={`0`} max={ this.props.duration } value={this.props.time}></input>
    
            </div>
            
        )
    }
})
