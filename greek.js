var Translate = function(translate) {
	var lexicon = {
		"merry":"efthymos", 
		"christmas":"Christougenna", 
		"and":"kai", 
		"happy":"eftychismenos", 
		"new":"neos", 
		"year":"etos"
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