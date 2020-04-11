import React, { Component } from 'react';

export default class MusicPlayer extends Component {
    state={
        url: "mp3",
        song: new Audio()
    }
    handlePlay = () => {
            console.log("playing>>")
            var songs = this.state.song;
            songs.src = "https://r5---sn-cvh7knes.googlevideo.com/videoplayback?expire=1586605317&ei=pFiRXvKIOt6qoQPMu4WYCw&ip=13.127.166.170&id=o-ABlpozsPg9bmTmhABEAKHLWyPXo-ENYbd8B-g2iHr0kP&itag=140&source=youtube&requiressl=yes&mh=Sn&mm=31%2C26&mn=sn-cvh7knes%2Csn-qxa7snee&ms=au%2Conr&mv=u&mvi=4&pl=23&gcr=in&vprv=1&mime=audio%2Fmp4&gir=yes&clen=4557574&dur=281.565&lmt=1584770154182412&mt=1586583488&fvip=5&keepalive=yes&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=ALrAebAwRAIgQa8g_cZcwdya_SRfVDm6eVelA07Pqd4LuAYgIy7XzwUCICvbERv7S_QWTU-sjwb4xkUCe_irrMBZc-eIs8DVnfSi&ratebypass=yes&sig=AJpPlLswRAIgR0zevUR8nJTL4ebt8mooY-owYwbcouXsWkCLTNcS-3MCIBCfs9zPmnWYXiGf32XaoIzjAjZmhz277aeuCGp6xlI_";
            
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
}
