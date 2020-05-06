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
    playSong = async (id,image,title)=>{
        let heading = this.titleTrim(title)
        let link = `http://localhost:9090/stream?id=${id}`
        let action = {
            type:"play_song",
            payload:link,
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
                <img className="itemListImage" src={this.props.thumbnail}/>
                <div className="listFooter">
                    <div className="listTitle">
                      <span>{this.titleTrim(this.props.title)}</span>
                    </div>
                    
                </div>
            </div>
        )
    }
})
