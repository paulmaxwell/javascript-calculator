var memory;
var operator = 0;
var current = "0";
var limit = 8;
var displayOperator;


function number(val) {
	if (current.length > limit) {
		current = "Error";
		document.getElementById("display").innerHTML = "Limit exceeded!";
	} else if (current == "0" || current == "Error") {
		current = val;
		document.getElementById("display").innerHTML = current;
	} else {
		current = current + val;
		document.getElementById("display").innerHTML = current;
	}
}


function decimal() {
	if (current.indexOf(".") == "-1") {
		current = current + ".";
		document.getElementById("display").innerHTML = current;
		operator = 0;
	}
}


function operate(op) {

	if (operator !== 0) {
		calculate();
	}

	memory = current;
	current = "0";
	operator = op;

	if (operator == "+") {
		displayOperator = operator;
	} else if (operator == "-") {
		displayOperator = operator;
	} else if (operator == "*") {
		displayOperator = "x";
	} else if (operator == "/") {
		displayOperator = "&#247;";
	}

	document.getElementById("display").innerHTML = displayOperator;
}


function calculate() {
	if (operator == "+") {current = eval(memory) + eval(current)}
	if (operator == "-") {current = eval(memory) - eval(current)}
	if (operator == "*") {current = eval(memory) * eval(current)}
	if (operator == "/") {current = eval(memory) / eval(current)}


	if (isNaN(current)) {
		memory = "";
		current = "0";
		document.getElementById("display").innerHTML = "NaN Error!";
	} else if (current.toString().length > limit) {
		console.log(current);
		memory = "";
		current = "0";
		document.getElementById("display").innerHTML = "Limit exceeded!";
	} else {
		memory = current;
		document.getElementById("display").innerHTML = current;
	}
	operator = 0;
}


function C() {
	current = "0";
	document.getElementById("display").innerHTML = current;
}


function AC() {
	current = "0";
	memory = "";
	operator = 0;
	document.getElementById("display").innerHTML = current;
}