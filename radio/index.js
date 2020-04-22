var express = require('express');
//var router = express.Router();
var ytdl = require('ytdl-core');
//var ffmpeg = require('ffmpeg');
//var fs = require('fs');
var app = express();


app.get('/stream', function (req, res) {  
  var videoUrl = `https://www.youtube.com/watch?v=${req.query.id}`;   
  //var destDir = "./"; 

  var videoReadableStream = ytdl(videoUrl, { filter: 'audioonly'});

  ytdl.getInfo(videoUrl, function(err, info){
      // var videoName = info.title.replace('|','').toString('ascii');

      // var videoWritableStream = fs.createWriteStream(destDir + "\\" + "zxcvbn" + '.mp3'); 
    if(!err){
      videoReadableStream.pipe(res);
    }
      

                    
  });              
});
app.listen(9090);
