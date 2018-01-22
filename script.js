function runThemAll(){
	let lifeOut = document.getElementById("life");
	lifeOut.innerText = "Meaning of life? " + life(42);

	let firstCapsOut = document.getElementById("firstCaps");
	firstCapsOut.innerText = firstCaps("dylan") + " not dylan";

	let sumArrayOut = document.getElementById("sumArray");
	sumArrayOut.innerText = "The sum of [1,2,3] = "+sumArray([1,2,3]);

	let stringRepeatOut = document.getElementById("stringRepeat");
	stringRepeatOut.innerText = "repeat 'three' 3 times " + stringRepeat("three",3);

	let dotProductOut = document.getElementById("dotProduct");
	dotProductOut.innerText = "the dot product of [1,2,3] and [2,3,4] = " + dotProduct([1,2,3], [2,3,4]);
}

function life(input) {
	return input === 42;
}

function firstCaps(input) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

function sumArray(arr) {
	let sum = 0;
	arr.forEach(function(element){
		sum += element;
	});
	return sum;
}

function stringRepeat (string,repeat) {
	let answer = "";
	for (i=1;i<=repeat;i++){
		answer += string + " ";
	}
	return (answer);
}

function dotProduct(a,b) {
	let result = 0;
	if (a.length === b.length){
		a.forEach(function(value,index) {
			// ANOTHER WAY TO DO IT     a.forEach((value,index) => {
			result += value * b[index];
		});
	}else {
		result = "arrays are different lengths";
	}
	return(result);
}

// overstock exchange rate snap challenge function
function deduct(price,walletStart, exchangeRate) {
	walletBalance = walletStart - price / exchangeRate;
	return(walletBalance);
}

window.onload = function() {
	runThemAll();
}