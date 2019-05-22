//basic1

function userAge() {		
	
	var y_Birth = prompt("Enter the year or your birth");

	var date = new Date();
	var y_Date = date.getFullYear();

	var age = y_Date - y_Birth;

	document.getElementById('text').innerHTML = ("Your Age is: "+age);
}
userAge();

//basic2

function truncate () {
var text = "I am a hero from World of Warcraft";
var number = 12;
var res = text.substring (number,0);

document.getElementById('text').innerHTML = res;
}
truncate();
}

//basic3
	/*
function userLife(){
	var yourname = prompt("What's your first name?");
	var yourlastname = prompt("What's your first name?");
	var age = prompt("How old are you?");
	
	console.log("You will be a "+job_title+" in "+job_location+" and married to "+partner_name+" with "+number_childrens+" childrens.");

	document.write("You will be a "+job_title+" in "+job_location+" and married to "+partner_name+" with "+number_childrens+" childrens.");
*/

/*
Write a function that will print your personal information - name, surname, age and short description using the return statement. 
Those values are defined as parameters to the function. All information should be passed as arguments, when the function is called.
Expected outcome: Hi I am John Doe I am 25 years old and I am a future programmer.

*/