$(document).ready(function() {


	$("button").click(function() {
		var userMessage = $("textarea").val();
		var languageSelect = $("#language option:selected").val();
		console.log("language", languageSelect);



		var newMessage;

		if (languageSelect === "greek") {
			newMessage = Translate.toGreek(userMessage);
		};
		if (languageSelect === "french") {
			newMessage = Translate.toFrench(userMessage);
		};
		if (languageSelect === "spanish") {
			newMessage = Translate.toSpanish(userMessage);
		};
		$("#translated-message").html(newMessage);

	});









});