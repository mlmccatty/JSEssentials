let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
let userInput = document.getElementById("userInput");

function startTest() {
// Set the test text
	document.getElementById("inputText").value = testText;
// Reset user input and output

	userInput.value = "";
	userInput.readOnly = false;
	userInput.focus();

	document.getElementById("output").value = "";
// Start timer
	startTime = new Date().getTime();
}

function endTest() {
	endTime = new Date().getTime();

	userInput.readOnly = true;
	const timeElapsed = (endTime - startTime)/1000;
	const userTypedText = userInput.value;

	const typedWords = userTypedText.split(/\s+/).filter(function (word) {
		return word !== "";
	}).length;

	let wpm = 0;
	if (timeElapsed !== 0 && !isNaN(typedWords)) {
		wpm = Math.round(typedWords / timeElapsed * 60) ;
	}

	const outputDiv = document.getElementById("output");
	outputDiv.innerHTML =
	`<h2>Typing Test Results</h2> 
	<p>Total Characters: ${userTypedText.length}</p>
	<p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
	<p>Words per Minute (WPM): ${wpm} </p>`;
}

