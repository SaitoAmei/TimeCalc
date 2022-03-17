const inputCalc = document.querySelector(".account"),
	  resultCalc = document.querySelector(".result");

let checkbox = 'hour';

function input(i){
	inputCalc.value = inputCalc.value + i
}


function result(){
	if(eval(inputCalc.value) == undefined){
		resultCalc.value = 0,00;
		inputCalc.value = 0,00;
	}
	
	resultCalc.value = eval(inputCalc.value);
	inputCalc.value = eval(inputCalc.value);
}

function backspace(){
	inputCalc.value = inputCalc.value.substring(0,inputCalc.value.length-1)
}

function reset(){
	resultCalc.value = '';
	inputCalc.value = '';
}

function define(i){
	checkbox = i;
}

function to_hour(){
	if(checkbox == 'hour'){
		resultCalc.value = resultCalc.value;
	}

	else if(checkbox == 'minutes'){
		resultCalc.value = eval(resultCalc.value) / 60;
	}

	else if(checkbox == 'seconds'){
		resultCalc.value = eval(resultCalc.value) / 3600;
	}
}

function to_minutes(){
	if(checkbox == 'hour'){
		resultCalc.value = eval(resultCalc.value) * 60;
	}

	else if(checkbox == 'minutes'){
		resultCalc.value = resultCalc.value;
	}

	else if(checkbox == 'seconds'){
		resultCalc.value = eval(resultCalc.value) / 60;
	}
}

function to_seconds(){
	if(checkbox == 'hour'){
		resultCalc.value = eval(resultCalc.value) * 3600;
	}

	else if(checkbox == 'minutes'){
		resultCalc.value = eval(resultCalc.value) * 60;
	}

	else if(checkbox == 'seconds'){
		resultCalc.value = resultCalc.value;
	}
}