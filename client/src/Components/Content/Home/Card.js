import React, { Component } from 'react'
import {connect} from 'react-redux';
let getData = (store)=>{
    return{
        all:store
    }

}
let getFunction = (dispatch)=>{
    return{
        play:dispatch
    }

}
export default connect(getData,getFunction)(class Card extends Component {
    playSong = (id)=>{
        console.log("Playid",id);
        let action = {
            type:"play_song",
            payload:id
        }
        this.props.play(action)
    }
    render() {
        return (
            <div onClick={()=>{this.playSong(this.props.id)}}>
                <img src={this.props.thumbnail}/>
            </div>
        )
    }
})
