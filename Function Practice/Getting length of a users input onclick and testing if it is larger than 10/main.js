var checkingLength = function() {
	var textBox = document.getElementById('typeBox');
	var resultsBox = document.getElementById('output');
	var text = textBox.value;
	var message = "String Length is " + text.length;
	resultsBox.innerHTML = message;

	if (text.length > 10) {
		var moreThan10 = document.getElementById('secondOutput');
		var moreThan10Message = "The string is more than 10";
		moreThan10.innerHTML = moreThan10Message;
	}
	else {
		var lessThan10 = document.getElementById('secondOutput');
		var lessThan10Message = "This string is less than 10";
		lessThan10.innerHTML = lessThan10Message;
	}
};