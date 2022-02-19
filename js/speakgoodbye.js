(function(window) {
	var byeSpeaker = {};
	byeSpeaker.speak = function(name){
		var speakword = "Good Bye ";
		console.log(speakword+""+name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);