import React, { Component } from 'react'
import {connect} from 'react-redux';

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
export default connect(getData,getFunction)(class List extends Component {
    playSong = async (id)=>{
        console.log("ID>>",id)
        let link = `http://localhost:9090/stream?id=${id}`
        console.log("Playid",link);
        let action = {
            type:"play_song",
            payload:link
        }
        this.props.play(action)
    }
    
    render() {
        return (
            <div  className="itemList" onClick={()=>{this.playSong(this.props.id)}}>
                <img className="itemListImage" src={this.props.thumbnail}/>
                <div className="listFooter">
                    <div className="listTitle">
                        <span>This is title</span>
                    </div>
                    
                </div>
            </div>
        )
    }
})
