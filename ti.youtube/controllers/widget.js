var args = $.args;
var defaultVideoId= $.args.defaultVideoId || "undefined";

//src:	https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
/*
 * Loads the specified video's thumbnail and prepares the player to play the video
 * @param {Function}
 * @property {Object} 
 * 		videoId			*Required
 * 		startSeconds	(Optional)
 * 		endSeconds		(Optional)
 */
function _cueVideoById(videoObject) {
	var ytParams = {};
	if (videoObject.hasOwnProperty("videoId")) {
		ytParams.videoId = videoObject.videoId;
		if (videoObject.hasOwnProperty("startSeconds")) {
			ytParams.startSeconds = videoObject.startSeconds;
		}
		if (videoObject.hasOwnProperty("endSeconds")) {
			ytParams.endSeconds = videoObject.endSeconds;
		}
		$.videoPlayer.evalJS('player.cueVideoById(' + JSON.stringify(ytParams) + ')');
	} else {
		//TODO	Add Error here:  INVALID - Video ID REQUIRED
	}			
};
/*
 * Loads and plays the specified video
 * @param {Function}
 * @property {Object} 
 * 		videoId			*Required
 * 		startSeconds	(Optional)
 * 		endSeconds		(Optional)
 */
function _loadVideoById(videoObject) {
	var ytParams = {};
	if (videoObject.hasOwnProperty("videoId")) {
		ytParams.videoId = videoObject.videoId;
		if (videoObject.hasOwnProperty("startSeconds")) {
			ytParams.startSeconds = videoObject.startSeconds;
		}
		if (videoObject.hasOwnProperty("endSeconds")) {
			ytParams.endSeconds = videoObject.endSeconds;
		}
		$.videoPlayer.evalJS('player.loadVideoById(' + JSON.stringify(ytParams) + ')');
	} else {
		//TODO	Add Error here:  INVALID - Video ID REQUIRED
	}
};

/*
 * Plays the currently cued/loaded video
 */
function _playVideo(){
	$.videoPlayer.evalJS('player.playVideo()');
}

exports.cueVideoById = _cueVideoById;
exports.loadVideoById = _loadVideoById;
exports.playVideo = _playVideo;


function setDefaultVideo(){
	if (defaultVideoId != "undefined") {
		$.videoPlayer.evalJS('setDefaultVideo("' + defaultVideoId + '")');
	}
}
