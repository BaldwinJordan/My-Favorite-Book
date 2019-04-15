
const answerField = document.querySelector('#response_field');

var correctAnswer = 0;

function displayAnswer(selectedAnswer) {
	event.preventDefault();
  	while(answerField.firstChild){
    	answerField.removeChild(answerField.firstChild);
  	};
    
    answerField.innerHTML = `<p class='text'>Incorrect! My favorite book was ${favoriteTitle}.</p>`
}

function checkAnswer() {
	var selectedAnswer = parseInt(document.querySelector('input[name=title]:checked').value);
	
	if(correctAnswer === selectedAnswer) {
		answerField.innerHTML = "<p class='text'>Correct! This was one of my favorite books! Enjoy a dad joke as a reward.</p>"
		clearDadJoke();
    	getDadJoke();
    }
    else {
		clearDadJoke();
    	displayAnswer(selectedAnswer);
    }
}

function clearAnswer() {
	event.preventDefault();
	while(answerField.firstChild){
		answerField.removeChild(answerField.firstChild);
  	};
}

