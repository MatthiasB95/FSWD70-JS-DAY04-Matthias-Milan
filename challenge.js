function game(){
	var dice1 = Math.floor(Math.random *6)+1;
	var dice2 = Math.floor(Math.random *6)+1;
	var dice3 = Math.floor(Math.random *6)+1;

	document.getElementById("placeholder");

}
var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};