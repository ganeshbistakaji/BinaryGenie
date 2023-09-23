id = ["2md4HQNRqJA", "papg2tsoFzg", "BMKWdLX9w3M", "7z-VseyACaE", "ycLqC41TO1U", "Sb5_BIprKDs", "WxyFRb0_eUQ", "nvKktNrJXcY", "gx7N3QGrVWE", "uT9n7iIxEw8", "R0HJtkYtjwk", "_wyPpPlFwrI", "0O-9uXmqbFI", "TwDHINjr1AQ", "hEX8ohGSOyc", "_JMXlGt3OSo", "9Ta1umc3tkQ", "vGGOOYOXoQ4", "lTACw0-yAzc", "Lr-uGVNM8Ko", "Tny4_-QjNHg", "2k6osJPXsgk", "t1qDSAUclzI", "HPddGlSIV3M", "gqBaQHXHwm0", "26QWcjTdJGM", "kCl3W4kR4-c", "kCl3W4kR4-c", "QAFjcAxcNcY", "NlagmmCwOU4", "jTPt5XO7KoU", "GkXAGe7SLm0", "GkXAGe7SLm0", "nkOL-mZjq60", "eUm1evTJ2Z8", "NONbkVx5FAM", "aBnsO6QWGEY", "Uhp9xPCILno", "w9CaKd2bq-E", "w9CaKd2bq-E", "ko5tv0tP6XA", "IH7TJla_rwY", "XRwgc6ERk_g", "qT5S7GgIioE", "bC-ilFHSt4s", "QoUboMfIemw", "fPBPlNABfpk", "fEj0IsPa37M", "r2YoiwVmAa0", "vXhbV_xgkMo", "fMfMdE3wifs", "brtUfHte9uc", "DoIGxx7P-ps", "dQCdwX0p_tc", "mGR2nH1HIR4", "FX2hGgUPbeY", "WvTMIKHvPxU", "Gjbr21JLfgg", "wjbsRjf8QN8", "ksV07bvCR3c", "K0KQP7qfrYo", "ZqOUYVjllVE", "YwHJCTXg6Es", "Ex652LPfUdA", "DlYlFpGEghQ"];

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