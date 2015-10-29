var Translate = (function() {
	var lexicon = {"merry":"feliz",
   "christmas":"navidad",
   "and":"y",
   "happy":"feliz",
   "new":"nuevo",
   "year":"ano"
  };

	return {
		toSpanish: function(userMessage) {
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
})(Translate);

//insane person brainvomit
// var Translator = (function(oldTranslator) {
//   var spanishLexicon = {"merry":"feliz",
//    "christmas":"navidad",
//    "and":"y",
//    "happy":"feliz",
//    "new":"nuevo",
//    "year":"año"
//   };
  
//   oldTranslator.getSpanishLexicon = function() {
//   	return spanishLexicon;
//   };

//   oldTranslator.translateToSpanish = function(words) {
//   	var newArr = []
//   	words.forEach(function(word) {
//   		newArr.push(spanishLexicon[word])
//   	})
//   }


//   return oldTranslator;

// })(Translator);