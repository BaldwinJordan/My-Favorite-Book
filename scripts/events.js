const submitField = document.querySelector('#submit');
const startField = document.querySelector('#start');
const themeField = document.querySelector('#theme');

function getBooks() {
	// clear previous answers
	clearTitles();
	clearAnswer();
	clearDadJoke();
	
	// remove submit button from display
	document.getElementById('submit').style.display = 'none';
	
	// select a random correct answer
	correctAnswer = Math.floor(Math.random() * maxResults);
	
	getTitles(themeField.value);
}

// call getBooks when the user selects start
startField.addEventListener('click', getBooks);

// call checkAnswer when the user selects submit
submitField.addEventListener('click', checkAnswer);

// call getBooks when the user selects enter on the subject line
themeField.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		getBooks();
	}
})

// display the submit button only after a user has selected an answer
document.querySelector('.books').addEventListener('click', function() {
	if(document.querySelector('input[name=title]:checked').value) {
		document.getElementById('submit').style.display = 'inline-block';
	}
});
