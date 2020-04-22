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
        play:dispatch,
        setDialog: dispatch
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
    handleDot = (e,x,y,id,thumbnail)=>{
        console.log("hey this is e",e.pageX,e.pageY,id, thumbnail);
        let data = {
            x : x,
            y : y,
            videoId: id,
            imgurl: thumbnail
        }
        let action = {
            type: "set_dialog",
            payload: data
        }
        this.props.setDialog(action);
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
                        <button onClick={(e)=>{this.handleDot(e, e.pageX, e.pageY, this.props.id, this.props.thumbnail)}}>l</button>
                    </div>
                </div>
            </div>
        )
    }
})
