//Bacis01
function age (y){
	

	var date = new Date();
	var x = date.getFullYear();

	var birth = x - y;

	document.getElementById("age").innerHTML = (birth);
}
age(1995);

//Basic02

function truncate (){
	var text = "I am a hero from World of Warcraft";
	var number = 12;
	var res = text.substring(number, 0);

	document.getElementById("text").innerHTML = res;

}
truncate();

//Basic03
function information(){
	var firstname = document.getElementById("firstname").value;
	var surname = document.getElementById("surname").value;
	var age1 = document.getElementById("age1").value;


	document.getElementById("info").innerHTML = ("Hi I am " + firstname + " " + surname + " and I am " + age1 + " years old.");
 
}
