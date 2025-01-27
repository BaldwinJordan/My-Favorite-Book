// retrieves a random dad joke
const jokeUrl = 'https://icanhazdadjoke.com/';

const jokeField = document.querySelector('#joke');

function getDadJoke() { 
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
    	if (xhr.readyState === XMLHttpRequest.DONE) {
        	if(!xhr.response){
    			console.log(xhr.response.status)
                return
  			}
            var json = JSON.parse(xhr.response)
			
			// add the dad joke to html
			jokeField.innerHTML = "<p class='text' id='dad_joke'>" + json.joke + "</p>";
    	}
    }    
  	xhr.open('GET', jokeUrl, true);
  	xhr.setRequestHeader("Accept", "application/json");
  	xhr.send();
}

//remove any previously added html
function clearDadJoke() {
  event.preventDefault();
  while(jokeField.firstChild){
    jokeField.removeChild(jokeField.firstChild);
  	};
}
