var counter = 0;

$('#asciiIn').keyup(function(event) {
	if (event.which == 13) {
		$('#mathOut_' + counter).text('`' + $(this).val() + '`');
		counter += 1;
		$('#output-area').append('<p id="mathOut_' + counter + '"></p>');
		$(this).val('');
	} else {
		$('#mathOut_' + counter).text('`' + $(this).val() + '`');
	}
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, "mathOut"]);

}).keydown(function(event) {
	if (event.which == 13) {
		event.preventDefault();
	}
});
