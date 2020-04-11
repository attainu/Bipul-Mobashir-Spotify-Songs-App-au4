import React, { Component } from 'react';
import {connect} from 'react-redux';
var getData = (store)=>{
    console.log("music Player",store)
    return {
        all:store
    }
}
var getFunction = (dispatch)=>{
    return{
        playSong:dispatch
    }
}

export default  connect(getData,getFunction)(class MusicPlayer extends Component {
    state={
        url: "mp3",
        song: new Audio()
    }
    handlePlay = () => {
            console.log("playing>>")
            var songs = this.state.song;
            songs.src = "https://r1---sn-cvh7knek.googlevideo.com/videoplayback?expire=1586533100&ei=jD6QXv3sMIicvgST7JXQCw&ip=13.127.166.170&id=o-ADv_01EtWlNLXeCSDVcDHfOsxaiRAdiSPdiWE1gJMlKt&itag=140&source=youtube&requiressl=yes&mh=Vb&mm=31%2C26&mn=sn-cvh7knek%2Csn-qxa7sn7l&ms=au%2Conr&mv=u&mvi=0&pl=23&vprv=1&mime=audio%2Fmp4&gir=yes&clen=1456961&dur=89.977&lmt=1579353062561880&mt=1586510966&fvip=1&keepalive=yes&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=ALrAebAwRQIgKoIJHoRvriJatQASo1KSksVaKhbsDJ5dsfmu0vnjg_ACIQCSQeWw63Kg5_KWNT_IGJiIhWQLFFca-XhAlJq4YI3TbQ%3D%3D&ratebypass=yes&sig=AJpPlLswRQIgeF245C6ToREgo2fYXWMfaZAet3qOBzD7cqOuO65e2F4CIQDqZUPedV6w9I3wGHbHMTSl7NtNvWZqpcpMeuvFBVJd8g%3D%3D";
            
            songs.volume = 1;
            songs.play();
        }

   
    handlePause = () => {
            this.state.song.pause()
    }
    handleMute = () => {
        if(this.state.song.muted){
            this.state.song.muted = false
        }else{
            this.state.song.muted = true
        }
       
    }
    componentDidMount = ()=>{
        let action = {
            type:"play_song",
            payload:"kJQP7kiw5Fk"
        }
        this.props.playSong(action);
    }

    render() {
        return (
            <div className="musicPlayer">
                This is Music player
                <button onClick={()=>this.handlePlay()}>Play</button>
                <button onClick={()=>this.handlePause()}>Pause</button>
                <button onClick={()=>this.handleMute()}>Mute</button>
            </div>
        )
    }
})
