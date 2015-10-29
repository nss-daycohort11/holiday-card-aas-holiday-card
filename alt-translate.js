var Translate = (function() {


	return {
		translateFunc: function (object) {
			var messageArray = userMessage.toLowerCase().split(" ");
			var translatedArray = messageArray.map(function(word) {
				if (word in object === false) {
					return word;
				} else {return object[word]};
			});
			var translatedMessage = translatedArray.join(" ");
			return translatedMessage;
		}
	}
	
})();