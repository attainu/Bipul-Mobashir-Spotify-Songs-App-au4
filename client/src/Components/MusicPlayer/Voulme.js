import React, { Component } from 'react';
import {connect } from 'react-redux';

var getData = (store)=>{
  //  console.log("music Player>>>>",store.music)
    return {
        volume:store.music.volume
    }
}
var getFunction = (dispatch)=>{
    return{
        setVolume :dispatch
    }
}

export default connect(getData,getFunction)(class Volume extends Component {

     volumeChange = (e ) => {
         let value  = (e.target.value)/100
         console.log(e.target.value)
         let action = {
             type:"volume",
             payload: value
         }
       this.props.setVolume(action)
      }
    render() {
        return (
        <input step={`1`} onChange={(e)=>{this.volumeChange(e)}} type = "range"  value={this.props.volume*100}></input>
        )
    }
})
