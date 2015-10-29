var Translator = (function(oldTranslator) {
  var spanishLexicon = {"merry":"feliz",
   "christmas":"navidad",
   "and":"y",
   "happy":"feliz",
   "new":"nuevo",
   "year":"ano"
  };
  
  oldTranslator.getSpanishLexicon = function() {
  	return spanishLexicon;
  };

  oldTranslator.translateToSpanish = function(words) {
  	var newArr = []
  	words.forEach(function(word) {
  		newArr.push(spanishLexicon[word])
  	})
  }


  return oldTranslator;

})(Translator);