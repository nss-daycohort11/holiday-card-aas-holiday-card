var Translate = (function() {
	var lexicon = {
		"merry":"god", 
		"christmas":"jul", 
		"and":"och", 
		"happy":"gott", 
		"new":"nytt", 
		"year":"år",
		// "?":"?",
		// "!":"!",
		// ".":".",
		// "":"",
		// "":"",
		// "":"",
		// "":"",
	};

	return {
		message: function(userMessage) {
			var messageArray = userMessage.toLowerCase().split(" ");
			var translatedArray = messageArray.map(function(word) {
					if (word in lexicon === false) {
						return word;
					} else {return lexicon[word]};
				});
				var translatedMessage = translatedArray.join(" ");
				return translatedMessage;
			}
	};








})();