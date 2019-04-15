const submitField = document.querySelector('#submit');
const startField = document.querySelector('#start');
const themeField = document.querySelector('#theme');

function getBooks() {
	clearTitles();
	clearAnswer();
	clearDadJoke();
	document.getElementById('submit').style.display = 'none';
	
	correctAnswer = Math.floor(Math.random() * maxResults);
	getTitles(themeField.value);
}

startField.addEventListener('click', getBooks);

submitField.addEventListener('click', checkAnswer);

themeField.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		getBooks();
	}
})

document.querySelector('.books').addEventListener('click', function() {
	if(document.querySelector('input[name=title]:checked').value) {
		document.getElementById('submit').style.display = 'inline-block';
	}
});
