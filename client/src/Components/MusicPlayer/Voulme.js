import React, { Component } from 'react';
import {connect } from 'react-redux';

var getData = (store)=>{
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
         let action = {
             type:"volume",
             payload: value
         }
       this.props.setVolume(action)
      }
    render() {
        var style = {
            'backgroundImage':`linear-gradient(90deg, #fa2399,#990071 ${(this.props.volume/1)*100}%,rgb(179, 179, 179) ${(this.props.volume/1)*100+1}%)`
        }
        return (
        <input style={style} className="volumeBar" step={`1`} onChange={(e)=>{this.volumeChange(e)}} type = "range"  value={this.props.volume*100}></input>
        )
    }
})
