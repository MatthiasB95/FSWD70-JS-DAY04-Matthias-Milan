function calc(x){
	document.getElementById("window").value += x;

}

function clearInput(y){
	document.getElementById("window").value = y;
}

function calcResult(){
	var result = eval(document.getElementById("window").value);
	document.getElementById("window").value = result;
}