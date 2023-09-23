 id = ["3K9X8uDzp2Q", "APM1mcKbK7o", "IY-y4JnDUZg", "K1Yx4W6wDCY", "4QK58G2Ebds", "fE7FtT1_Nu4", "55DHzAQNnrw", "xO7HbkpBDTA", "C4IxmMvqxJs", "SWiT7deAOPM", "9J1tWxlJ6kE", "gWx-zDKITvM", "-bvvi40oFes", "NqGFXyCgJ-8", "6FHRlUj_SJk", "yWt9EEszK00", "bW1wr5X__KY", "iSFByalOdRU", "dydPJPnJDhc", "sHSSqmuV1rA", "69elAZadMRA"];

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