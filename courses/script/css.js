id = ["-ybtIniLPPM", "s_CoXmQGhwA", "bG3CN5AcSsU", "y0XjHxhPmC8", "N1ctqncjw4o", "xSXf9h4fIKo", "v2NMNyCTcJk", "A1b9QbXFZNQ", "GuEad1YB3KI", "LmCm3LVl7c0", "PxBudUgHYYM", "nCGsfYUUgAk", "LNaL_PKhGQI", "gyk_R7xtzZU", "egGfOmdCMZQ", "UyyR9vg-LPc", "hfzXgifmb-c", "TCbBX1_C8Pk"];

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