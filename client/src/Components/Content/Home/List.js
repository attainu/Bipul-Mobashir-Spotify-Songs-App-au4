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
         console.log("ID",id)
        let heading = this.titleTrim(title)
        let link = `http://localhost:9090/stream?id=${id}`
        let action = {
            type:"play_song",
            payload:link,
            extra:{
                image:image,
                title:heading,
                id:id
            }
        }
        this.props.play(action)
    }

    titleTrim = (title) => {
        let name = title.split("|");
        var str = name[0];

        var mapp = {
        "Video": "", "April": "", "video": "","VIDEO": "", "Official": "", "OFFICIAL": "", "(": "", ")": "", "[": "", "]": "", "#": "", "&#": "", "Audio": "", "audio": "", "AUDIO": "", "full": "", "Full": "", "SONGS": "", "Songs": "", "Song": "", "songs": "", "song": "", "SONG": "",  "&quot": "", "&amp": "", ";": "", "//": "", "Jukebox": "", "Music": "", "HINDI": "", "Hindi": "", "Mirchi": "", "Awards": "", "HD": "", "LINK": "", "Mp3": "", "Bollywood": "", "Hits": "", "2020": ""
        };

        function replaceAll(mapp, target) {
            Object.keys(mapp).forEach((key) => {
            str = str.replace(key, target)

        })  
    }

    replaceAll(mapp, "");
    return str;
       
}
    
    render() {
        return (

            <div  className="itemList" onClick={()=>{this.playSong(this.props.id,this.props.thumbnail,this.props.title)}}>
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
