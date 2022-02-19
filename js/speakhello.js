(function(window) {
	var helloSpeaker = {};
	helloSpeaker.speak = function(name){
		var speakword = "hello ";
		console.log(speakword+""+name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);