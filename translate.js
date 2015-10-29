var Translator = (function(words, language) {

  var translate = function(words, lexicon) {
    //andri's code that translate words
  };

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
