var Translate = function(translate) {
	var lexicon = {
		"merry":"efthymos", 
		"christmas":"Christougenna", 
		"and":"kai", 
		"happy":"eftychismenos", 
		"new":"neos", 
		"year":"etos"
	};

	translate.toGreek = function() {
			return translateFunc(lexicon);
	};
	return translate;

}(Translate);