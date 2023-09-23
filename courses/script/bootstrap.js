id = ["zefN0csRyMI", "bzZyCB5QT9I", "MYla235sBNY", "fsGBCliEKqM", "UyePy_DJBLU", "hWcFqtQI3qE", "uwL5ZA4Rfac", "CXtfzHcqI94", "7kHkeONEHGs", "nZZ06J1EUqM", "5ImiW-MdRxo", "_ls9d8XRIM8", "dzPkd7ieyDc", "7KVVoEDQB2o", "O2e2AiR0GZg", "Ien1ZEpOBEM", "i7YS7o1Tgic", "StFObj54aHI", "e3b1RKwmSFw", "dZ7Pxh-0h-Q", "0OChmuojjnM", "knNbh9LdFKQ", "Bf0B_hAlyBY", "fkhEOQuONQE", "cE5omTnn-Ys", "oGMgYCAarbc", "uY35kFt4n3o", "cWtwt_ZCk0I", "WF1awwkxZM4", "79Y0-S6mb0E", "hJPU6Hcwptk", "wxy2DqnDa5M", "IhkSVGEKfvc", "1jP322cBfdc", "GSxhGo7f4yc", "oLst-hDwKEA", "bTBYnr6DdVw", "XU4LPurM5HI", "UL-cCUGGLu4", "GaQ2ntIHIUI", "p1A1RvdIvZY", "PuOc6Ut-Zyg", "AICJkKpfOoc", "HrnBA-yTJKQ", "Pwu73djlu0M", "xy8FM1fecV4", "Xm2kiZst4WQ", "cAUVfaGjWFo", "F0xDPuBsPCI", "jb2qnkvClqw", "ns4BsU-VD_I"]

function load_func(){

	id.forEach((value, index) => {
		const paragraph = document.getElementById((index + 1).toString());

		if (paragraph) {
		  	const vidurl = 'https://www.youtube.com/watch?v='+value;

		   	$.getJSON('https://noembed.com/embed',
   				{dataType: 'json', url: vidurl},  data => {
 				paragraph.innerHTML = ("JQUERY", data.title);
			});
		}
	});

	vpd = document.getElementById('video-player');
	vpd.src = "https://www.youtube.com/embed/" + id[0] + "?rel=0";

	const vidurl = 'https://www.youtube.com/watch?v='+ id[0];

	$.getJSON('https://noembed.com/embed',
   		{dataType: 'json', url: vidurl},  data => {
 		document.getElementById('video_title').innerHTML = ("JQUERY", data.title);
	});

}

function video_add(i){
	document.getElementById('video-player').src = "https://www.youtube.com/embed/" + id[i] + "?rel=0";

	const vidurl = 'https://www.youtube.com/watch?v='+ id[i];

	$.getJSON('https://noembed.com/embed',
   		{dataType: 'json', url: vidurl},  data => {
 		document.getElementById('video_title').innerHTML = ("JQUERY", data.title);
	});
}