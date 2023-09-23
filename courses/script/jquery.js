id = ["a59kOE2Ma1Q", "l7JaPcGQYtk", "hcpskGpuKaE", "d2hnKt0v7Ew", "InSYKYCw85s", "4gni65DaSPo", "C4QY6F9dyqE", "8XSQ67PgLrQ", "VUQALWmU-WM", "vJOFPK59bPY", "rMrZlm2hyLg", "wxOHr08Eul4", "0lcGNJFSWfY", "-iv274it7CM", "0m8rMbaIbuI", "2G4nooOPj1U", "gMhj1528jN8", "PH65y5kz2jg", "G1w3yR3Gd20", "h286nfsSejY", "nRn2BC0cPfs", "IK2tncasotY", "NUbQILb-CgM", "5db2wG9APtY", "FA4K12b999k", "qlUhr5WUU84", "4rhLDPf3EPE", "dH9l3wMNXl8", "B1mU0Uk_Qs4", "l4nACgCZcwY", "jw5afxwizcI", "z-y6-yKDq0A", "YLBGlZzAz4g", "ItQU9sA2eK0", "JxDjOb0UjAw", "Wxnd21_f_pc", "0zybq9BE1hg", "hu-MgxVeosg", "Uiy9keC3MUg", "pkIZqzSVr74", "Co7F8EwWr_U", "nQTPc8Coh4U", "vnEc9OaOsbE", "oBcKmmjpwls", "iCBBLA3R-60", "PiLQD1qAsos", "TmkvSJM53L0", "5bPUZFgbn3A", "wAUmwTiUOng", "M9QlgYvHFcY", "MOgBW3WKeCc", "H9FPOJduvts", "nm211NaGEmk", "xPk6f0SoHyQ", "63etgpKeGms", "VMvK1UPvyws", "4ac6WW7dS1M", "ofcvU36LWHk", "C_vqUc17dsQ", "kvlBmon98xg", "JFt7fbZVByo", "Zq_aMDFeCCA", "L79262-ne78", "nV4ulLwTlN4", "5XYXVYoqWAo", "csJfmyJhnlY", "x6iHQ5G-KKc", "Gy5pOBI1GPw", "Slx7hen576Q", "HPVavdDzYoI", "SjLJ8Dyuywg", "tCr1p_InOe4", "RkG2XnLHg_w", "-bqu_Ryuy0I", "ew8XSgBmt1A", "4Ql3nOvMim0", "DORmHaYU27c", "Qb7tpCh1aAA", "-xeVSVfAVto", "reNLCuaxFF8", "qmv1Q_bjyhM", "BzFIMmt514s", "3x2BoYPfBIk", "QJJSnUVX6PA", "EbMR_nlIAkc", "vIJGTyk5zUE", "SE3457MHikI", "67l22FLkWpQ", "1kqZmwtGaXM", "l7XeKrk82n8", "1-htL7dhd34", "hk-_CIF5Um8", "kb3Vf0SpQzk", "-JFkAaLOou8", "GN7hSjAJNm8", "etyAsjLJLA8", "UqmdvzBH3Ho", "B5IVXSbS15Y", "IXpPoS-A7aI", "OT_HV8NcDTE", "1XiFirte7PA", "BfH5aeeZvh0", "KVweRRbpQWs", "P_-zxQYPy5w", "GA03MzN9QFg", "TgD24a9gxXw", "7nTVWt89--I", "-5ogj6q1Ffw", "LmOx0Op0n2U", "nsEYtDwj3ZU", "u4QKLehvUhs", "KB8-GORXzaw", "OSveDDVdtOM"];
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