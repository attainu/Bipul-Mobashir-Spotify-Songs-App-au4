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
    playSong = async (id,image,title)=>{
        let heading = this.titleTrim(title)
        let link = await getAudioLink(id);
        let action = {
            type:"play_song",
            payload:link.data,
            extra:{
                image:image,
                title:heading
            }
        }
        this.props.play(action)
    }
    titleTrim = (title) => {
        let name = title.split("|");
        var str = name[0];

        var mapp = {
        "Video": "", "video": "","VIDEO": "", "Official": "", "OFFICIAL": "", "(": "", ")": "", "[": "", "]": "", "#": "", "&#": "", "Audio": "", "audio": "", "AUDIO": "", "full": "", "Full": "", "SONGS": "", "Songs": "", "Song": "", "songs": "", "song": "", "SONG": "",  "&quot": "", "&amp": "", ";": "", "//": "", "Jukebox": "", "Music": "", "HINDI": "", "Hindi": "", "Mirchi": "", "Awards": "", "HD": "", "LINK": "", "Mp3": "", "Bollywood": "", "Hits": "", "2020": ""
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
            <div  className="itemCCard" onClick={()=>{this.playSong(this.props.id,this.props.thumbnail,this.props.title)}}>
                <img className="itemCCardImage" src={this.props.thumbnail}/>
            </div>
        )
    }
})
