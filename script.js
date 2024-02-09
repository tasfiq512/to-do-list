const inputBox = document.querySelector('.input-box')
const listContainer = document.querySelector('.list-container')
//function to add tasks to task list
function addTask(){
	if(inputBox.value === ''){
		alert('You must write something!');
	}
	else{
		let li = document.createElement('li')
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);

		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	inputBox.value = '';
	saveData();
}
//creates event that will toggle check class when clicked, or remove if X is pressed
listContainer.addEventListener('click', function(e){
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked')
		saveData();
	}
	else if(e.target.tagName === 'SPAN'){
		e.target.parentElement.remove();
		saveData();
	}
}, false);



// Saves the data to the local storage so it will stay when you refresh the page 
function saveData(){
	localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
	listContainer.innerHTML = localStorage.getItem('data');
}
showTask();