import React, { Component } from 'react'
import {connect} from 'react-redux';

let getData = (store)=>{
    return{
        currentId : store.music.songId,
        songStatus: store.music.songStatus
    }

}
let getFunction = (dispatch)=>{
    return{
        play:dispatch,
        setDialog: dispatch
    }

}
export default connect(getData,getFunction)(class List extends Component {

    state = {
        effect : false
    }

    playSong = async (id,image,title)=>{

        let link = `http://radioserver-musicme.herokuapp.com/stream?id=${id}`
        let action = {
            type:"play_song",
            payload:link,
            extra:{
                image:"http://tuneradio.in/assets/images/banner.jpg",
                title:`Radio 10.${title}`,
                id:id
            }
        }
        this.props.play(action)
    }

    
       

    
    render() {
        return (

            <div  className="itemList" onClick={()=>{this.playSong(this.props.id,this.props.thumbnail,this.props.number)}}>
                {/* <img className="itemListImage" src={this.props.thumbnail}/> */}
                <div className="radioPlayButton">
                    { this.props.currentId && this.props.songStatus && this.props.currentId === this.props.id ? <div id="play-video" class="radio-pause-button" >
                    <span></span>
                    <span></span>
                    
                    </div>: 
                    <div id="play-video" className="radio-play-button" >
                    <span></span>
                    
                    
                    </div>}
                 </div>

                <div className="listFooter">
                    <div className="listTitle">
                        <span>{`Radio 10.${this.props.number}`}</span>
                    </div>
                    
                </div>
            </div>
        )
    }
})
