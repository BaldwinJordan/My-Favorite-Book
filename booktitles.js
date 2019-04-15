const bookTitle = document.querySelector('.books');
const maxResults = 5;

var favoriteTitle = "";

function getTitles(theme) { 

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
    	if (xhr.readyState === XMLHttpRequest.DONE) {
        	if(!xhr.response){
    			console.log(xhr.response.status);
                return
  			}
            var json = JSON.parse(xhr.response);
			clearTitles();
			
			let titlesList = []
			for(let i = 0; i < maxResults; i++){
				titlesList.push(`<label class="book_selection">
									<input id="book_input" type="radio" name="title" value=${i}>
										<div class="book_info">
											<img class="book_image" src=${imageURL + json.title[i].isbn}>
											<label class="book_title text">${json.title[i].titleweb}</label>
										</div>
								</label>`)
				
				if(i===correctAnswer) {
					favoriteTitle = json.title[i].titleweb;
				}
			}
			// joins the array of HTML strings into one string
			titlesList = titlesList.join("")
			
			bookTitle.innerHTML = titlesList;

		}
		else {
			clearTitles();
			bookTitle.innerHTML = "<p class='text' id='loading'>Searching my library...</p>";
		}
	}		
	
	var themeUrlAddition = "&theme=";
	if (theme != ""){
		themeUrlAddition += theme;
	}
	else {
		//defualt theme
		themeUrlAddition += "Fantasy";
	}
	
	var randomStart = Math.round(Math.random()*300);
	
	const titlesURL = `https://reststop.randomhouse.com/resources/titles?start=${randomStart}&max=${maxResults}&expandLevel=1&format=HC${themeUrlAddition}`
	const imageURL = "https://reststop.randomhouse.com/resources/titles/"
  	xhr.open('GET', titlesURL, true, 'testuser', 'testpassword');
  	xhr.setRequestHeader("Accept", "application/json");
  	xhr.send();
}

function clearTitles() {
  event.preventDefault();
  while(bookTitle.firstChild){
    bookTitle.removeChild(bookTitle.firstChild);
  	};
}
