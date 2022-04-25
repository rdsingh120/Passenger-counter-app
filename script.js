

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById("total-el")
let count = 0;


function increment() {
	countEl.textContent = count += 1;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
} 

