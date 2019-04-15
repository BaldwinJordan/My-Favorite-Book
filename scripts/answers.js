// check input and display the result

const answerField = document.querySelector('#response_field');

var correctAnswer = 0;

// incorrect answer, display the correct answer to the user
function displayAnswer(selectedAnswer) {    
    answerField.innerHTML = `<p class='text'>Incorrect! My favorite book was ${favoriteTitle}.</p>`
}

// checks if the user selected the correct answer
function checkAnswer() {
	var selectedAnswer = parseInt(document.querySelector('input[name=title]:checked').value);
	
	if(correctAnswer === selectedAnswer) {
		answerField.innerHTML = "<p class='text'>Correct! This was one of my favorite books! Enjoy a dad joke as a reward.</p>"
    	clearDadJoke();
		getDadJoke();
    }
    else {
		clearAnswer();
    	displayAnswer(selectedAnswer);
    }
}

//remove any previously added html
function clearAnswer() {
	event.preventDefault();
	while(answerField.firstChild){
		answerField.removeChild(answerField.firstChild);
  	};
}

