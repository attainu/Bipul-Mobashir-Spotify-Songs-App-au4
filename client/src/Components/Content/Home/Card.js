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
    handleDot = (e)=>{
        console.log("hey this is e",e.screenX,e.screenY);
        e.stopPropagation()
    }
    render() {
        return (
            <div  className="itemCard" onClick={()=>{this.playSong(this.props.id)}}>
                <img className="itemCardImage" src={this.props.thumbnail}/>
                <div className="cardFooter">
                    <div className="cardTitle">
                        <span>This is title</span>
                    </div>
                    <div className="dotButton">
                        <button onClick={(e)=>{this.handleDot(e)}}>l</button>
                    </div>
                </div>
            </div>
        )
    }
})
