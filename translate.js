var Translator = (function(language, words) {

  var translate = function(words, language) {
      var messageArray = words.toLowerCase().split(" ");
      var translatedArray = messageArray.map(function(word) {
          if (word in language === false) {
            return word;
          } else {return language[word]};
        });
        var translatedMessage = translatedArray.join(" ");
        return translatedMessage;
      }

  return {
    heresAFunc: function(language, words) {
      switch(language) {
        case 'spanish':
          var spanishLexicon = Translator.getSpanishLexicon();
          translate(words, spanishLexicon);
          console.log('spanish');
          break;
        default:
          console.log("default");  
      }
    }
  };
})();
