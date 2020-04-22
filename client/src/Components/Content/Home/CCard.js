import React, { Component } from 'react'
import {connect} from 'react-redux';
import getAudioLink from './../../../API/getAudioLink';
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
    playSong = async (id)=>{
        let link = await getAudioLink(id);
        console.log("Playid",link);
        let action = {
            type:"play_song",
            payload:link.data
        }
        this.props.play(action)
    }
    render() {
        return (
            <div  className="itemCCard" onClick={()=>{this.playSong(this.props.id)}}>
                <img className="itemCCardImage" src={this.props.thumbnail}/>
            </div>
        )
    }
})
