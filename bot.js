var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

var Message;
var M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12, M13, M14, M15;
var M16, M17, M18, M19, M20, M21, M22, M23, M24, M25, M26, M27, M28, M29, M30;
var M31, M32, M33, M34, M35, M36, M37, M38, M39, M40, M41, M42, M43, M44, M45, M46, M47, M48, M49, M50;


		M0 = "Hey, thats me!  My name is Brian Strohm & I am a BOT.   https://i.imgur.com/GVyC0M0.gifv";
		M1 = "GREATEST OF ALL TIME";
		M2 = "______BLANK_______";
		M3 = "I would suck his fucking dick right this second";
		M4 = "Team Cancer";
		M5 = "https://i.imgur.com/cKFuDlI.gifv";
		M6 = "https://i.imgur.com/Gzenw1K.gifv";
		M7 = "Baby is due in July, wedding is next Thursday.  You're all invited";
		M8 = "https://i.imgur.com/IJxvPFl.jpg";
		M9 = "https://i.imgur.com/sE70Lxx.jpg";
		M10 = "https://i.imgur.com/YBk9van.png";
		M11 = "https://i.imgur.com/rgRd59V.png";
		M12 = "https://i.imgur.com/uthvglv.gifv";
		M13 = "https://i.imgur.com/igQaiMP.jpg";
		M14 = "https://i.imgur.com/uFc3TIQ.jpg";
		M15 = "https://i.imgur.com/joEgVfo.png";
		M16 = "https://i.imgur.com/UOLYt8A.jpg";   //G
		M17 = "https://i.imgur.com/OXuH6a6.jpg";
		M18 = "https://i.imgur.com/mv9hlxC.jpg";
		M19 = "https://i.imgur.com/rA1uXVc.jpg";
		M20 = "https://i.imgur.com/HeegNIy.jpg";
		M21 = "https://i.imgur.com/tLqNbGt.png";
		M22 = "https://i.imgur.com/7FwyBcH.png";
		M23 = "https://i.imgur.com/GezeA9G.png";
		M24 = "https://i.imgur.com/KBsZMNB.png";   //O
		M25 = "https://i.imgur.com/to2utRx.jpg";
		M26 = "https://i.imgur.com/bantYzp.jpg";
		M27 = "https://i.imgur.com/V9ugYOl.jpg";
		M28 = "https://i.imgur.com/vImV4dj.jpg";
		M29 = "https://i.imgur.com/lNYMMgB.jpg";
		M30 = "https://i.imgur.com/7JK4LF0.jpg";
		M31 = "https://i.imgur.com/jfYe6fG.jpg";
		M32 = "https://i.imgur.com/uHckvhm.jpg";
		M33 = "https://i.imgur.com/R4bJLPb.jpg";
		M34 = "______BLANK_______";
		M35 = "______BLANK_______";
		M36 = "______BLANK_______";
		M37 = "______BLANK_______";
		M38 = "______BLANK_______";
		M39 = "______BLANK_______";
		M40 = "______BLANK_______";
		M41 = "______BLANK_______";
		M42 = "______BLANK_______";
		M43 = "______BLANK_______";
		M44 = "______BLANK_______";
		M45 = "______BLANK_______";
		M46 = "______BLANK_______";
		M47 = "______BLANK_______";
		M48 = "______BLANK_______";
		M49 = "______BLANK_______";
		M50 = "______BLANK_______";
  
function respond()  {
	var request = JSON.parse(this.req.chunks[0]),
      botRegex0 = /^\/Brian Strohm$/;
	  botRegex1 = /^\/LeBron James$/;
	  botRegex2 = /^\/Halo 2$/;
	  botRegex3 = /^\/Evan Drees$/;
	  botRegex4 = /^\/Team Jack$/;
	  botRegex5 = /^\/y$/;
	  botRegex6 = /^\/n$/;
	  botRegex7 = /^\/Chloe$/;
	  botRegex8 = /^\/bullshit$/;
	  botRegex9 = /^\/gonna b gud$/;
	  botRegex10 = /^\/briguy$/;
	  botRegex11 = /^\/omegalul$/;
	  botRegex12 = /^\/disgust$/;
	  botRegex13 = /^\/gas$/;
	  botRegex14 = /^\/boomer$/;
	  botRegex15 = /^\/POGU$/;
	  botRegex16 = /^\/pepehands$/;
	  botRegex17 = /^\/TUFF$/;
	  botRegex18 = /^\/cmonbruh$/;
	  botRegex19 = /^\/ope$/;
	  botRegex20 = /^\/thot detected$/;
	  botRegex21 = /^\/omw$/;
	  botRegex22 = /^\/neat$/;
	  botRegex23 = /^\/WOAH$/;
	  botRegex24 = /^\/POGGERS$/;
	  botRegex25 = /^\/BACK TO WORK$/;     //unfinished here & below
	  botRegex26 = /^\/howdy$/;
	  botRegex27 = /^\/rly$/;
	  botRegex28 = /^\/box$/;
	  botRegex29 = /^\/srlsly$/;
	  botRegex30 = /^\/aww yee$/;
	  botRegex31 = /^\/love$/;
	  botRegex32 = /^\/WHO TF UP$/;
	  botRegex33 = /^\/beam me up scotty$/;
	  botRegex34 = /^\/EEEEEE$/;
	  botRegex35 = /^\/FFFFFF$/;
	  botRegex36 = /^\/GGGGGG$/;
	  botRegex37 = /^\/HHHHHH$/;
	  botRegex38 = /^\/IIIIII$/;
	  botRegex39 = /^\/JJJJJJ$/;
	  botRegex40 = /^\/KKKKKK$/;
	  botRegex41 = /^\/LLLLLL$/;
	  botRegex42 = /^\/MMMMMM$/;
	  botRegex43 = /^\/NNNNNN$/;
	  botRegex44 = /^\/OOOOOO$/;
	  botRegex45 = /^\/PPPPPP$/;
	  botRegex46 = /^\/QQQQQQ$/;
	  botRegex47 = /^\/RRRRRR$/;
	  botRegex48 = /^\/SSSSSS$/;
	  botRegex49 = /^\/TTTTTT$/;
	  
  
  if(request.text && botRegex0.test(request.text)) {
    this.res.writeHead(200);
	Message = M0;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex1.test(request.text)) {
    this.res.writeHead(200);
	Message = M1;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex2.test(request.text)) {
    this.res.writeHead(200);
	Message = M1;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex3.test(request.text)) {
    this.res.writeHead(200);
	Message = M3;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex4.test(request.text)) {
    this.res.writeHead(200);
	Message = M4;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex5.test(request.text)) {
    this.res.writeHead(200);
	Message = M5;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex6.test(request.text)) {
    this.res.writeHead(200);
	Message = M6;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex7.test(request.text)) {
    this.res.writeHead(200);
	Message = M7;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex8.test(request.text)) {
    this.res.writeHead(200);
	Message = M8;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex9.test(request.text)) {
    this.res.writeHead(200);
	Message = M9;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex10.test(request.text)) {
    this.res.writeHead(200);
	Message = M10;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex11.test(request.text)) {
    this.res.writeHead(200);
	Message = M11;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex12.test(request.text)) {
    this.res.writeHead(200);
	Message = M12;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex13.test(request.text)) {
    this.res.writeHead(200);
	Message = M13;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex14.test(request.text)) {
    this.res.writeHead(200);
	Message = M14;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex15.test(request.text)) {
    this.res.writeHead(200);
	Message = M15;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex16.test(request.text)) {
    this.res.writeHead(200);
	Message = M16;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex17.test(request.text)) {
    this.res.writeHead(200);
	Message = M17;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex18.test(request.text)) {
    this.res.writeHead(200);
	Message = M18;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex19.test(request.text)) {
    this.res.writeHead(200);
	Message = M19;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex20.test(request.text)) {
    this.res.writeHead(200);
	Message = M20;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex21.test(request.text)) {
    this.res.writeHead(200);
	Message = M21;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex22.test(request.text)) {
    this.res.writeHead(200);
	Message = M22;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex23.test(request.text)) {
    this.res.writeHead(200);
	Message = M23;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex24.test(request.text)) {
    this.res.writeHead(200);
	Message = M24;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex25.test(request.text)) {
    this.res.writeHead(200);
	Message = M25;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex26.test(request.text)) {
    this.res.writeHead(200);
	Message = M26;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex27.test(request.text)) {
    this.res.writeHead(200);
	Message = M27;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex28.test(request.text)) {
    this.res.writeHead(200);
	Message = M28;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex29.test(request.text)) {
    this.res.writeHead(200);
	Message = M29;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex30.test(request.text)) {
    this.res.writeHead(200);
	Message = M30;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex31.test(request.text)) {
    this.res.writeHead(200);
	Message = M31;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex32.test(request.text)) {
    this.res.writeHead(200);
	Message = M32;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex33.test(request.text)) {
    this.res.writeHead(200);
	Message = M33;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex34.test(request.text)) {
    this.res.writeHead(200);
	Message = M34;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex35.test(request.text)) {
    this.res.writeHead(200);
	Message = M35;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex36.test(request.text)) {
    this.res.writeHead(200);
	Message = M36;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex37.test(request.text)) {
    this.res.writeHead(200);
	Message = M37;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex38.test(request.text)) {
    this.res.writeHead(200);
	Message = M38;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex39.test(request.text)) {
    this.res.writeHead(200);
	Message = M39;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex40.test(request.text)) {
    this.res.writeHead(200);
	Message = M40;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex41.test(request.text)) {
    this.res.writeHead(200);
	Message = M41;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex42.test(request.text)) {
    this.res.writeHead(200);
	Message = M42;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex43.test(request.text)) {
    this.res.writeHead(200);
	Message = M43;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex44.test(request.text)) {
    this.res.writeHead(200);
	Message = M44;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex45.test(request.text)) {
    this.res.writeHead(200);
	Message = M45;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex46.test(request.text)) {
    this.res.writeHead(200);
	Message = M46;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex47.test(request.text)) {
    this.res.writeHead(200);
	Message = M47;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex48.test(request.text)) {
    this.res.writeHead(200);
	Message = M48;
    postMessage();
    this.res.end();
  }
  
  else if(request.text && botRegex49.test(request.text)) {
    this.res.writeHead(200);
	Message = M49;
    postMessage();
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}
  
  
 
function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = Message;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;
