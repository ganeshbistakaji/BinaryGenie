id = ["NAEHbzXMNpA", "uoMCY2FhPAE", "uMIjPKUXEEE", "jlpkV3oY5-A", "4ZunanytE88", "nurQlBDhFLY", "O3P01QDvdqY", "u0WYSDbmoj8", "K-GFNxiV7W0", "GuOb9t1zeQg", "1Pv3dlO8KWw", "VuNS-OA9CZA", "HYQJyTdph5E", "uf_vad2ViPM", "Ql64muSQcCw", "z_HqwA70Op8", "2PgE7MpKzZU", "HBCf2qDeVGQ", "nFCulrQ_IZ0"];

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