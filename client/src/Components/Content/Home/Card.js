import React, { Component } from 'react'
import {connect} from 'react-redux';
import getAudioLink from './../../../API/getAudioLink';
let getData = (store)=>{
    return{
        all:store,
        auth: store.auth,
    }

}
let getFunction = (dispatch)=>{
    return{
        play:dispatch,
        setDialog: dispatch
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
    handleDot = (e,x,y,id,thumbnail, title)=>{
        let data = {
            x : x,
            y : y,
            trackid: id,
            imgurl: thumbnail,
            trackname: title
        }
        let action = {
            type: "set_dialog",
            payload: data
        }
        this.props.setDialog(action);
        e.stopPropagation()
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
            <div  className="itemCard" onClick={()=>{this.playSong(this.props.id,this.props.thumbnail,this.props.title)}}>
                <div id="play-video" class="video-play-button" >
  <span></span>
</div>
                <img className="itemCardImage" src={this.props.thumbnail}/>
                <div className="cardFooter">
                    <div className="cardTitle">
                        <span>{this.titleTrim(this.props.title)}</span>
                    </div>
                    {this.props.auth.auth && <div className="dotButton">
                        <i className="fa fa-ellipsis-v" aria-hidden="true" onClick={(e)=>{this.handleDot(e, e.pageX, e.pageY, this.props.id, this.props.thumbnail, this.props.title)}}></i>
                    </div>}
                </div>
            </div>
        )
    }
})
