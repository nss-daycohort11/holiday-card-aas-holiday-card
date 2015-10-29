

//IIFE for Translate to French

var Translate = function(translate) {
	var lexicon = {
					"merry":"joyeux", 
					"christmas":"noël", 
					"and":"et", 
					"happy":"content", 
					"new":"neuf", 
					"year":"an"
					};

	translate.toGreek = function(userMessage) {
			var messageArray = userMessage.toLowerCase().split(" ");
			var translatedArray = messageArray.map(function(word) {
					if (word in lexicon === false) {
						return word;
					} else {return lexicon[word]};
				});
				var translatedMessage = translatedArray.join(" ");
				return translatedMessage;
			}
	return translate;

}(Translate);



