var ran = Math.floor(Math.random() * 10) + 1;
console.log(ran);
var ran2 = Math.floor(Math.random() * 10) + 1;
console.log(ran2);
var ran3 = Math.floor(Math.random() * 10) + 1;
console.log(ran3);

var y = prompt("How many nights?")

function hotelConstructor(name, nights, wanted) {
	this.name = name;
	this.nights = nights;
	this.wanted = wanted;

	this.check = function(){
	if (this.wanted > this.nights) {
		document.getElementById("hotelNights").innerHTML = "No nights available"
	}else{
		document.getElementById("hotelNights").innerHTML = "Reserve";

		}
	}
}
function ask(test){

	if (test == 1) {
		var hilton = new hotelConstructor("Hilton", ran, y);
		hilton.check();
	}else if (test == 2) {
		var mariott = new hotelConstructor("Marriott", ran2, y);
		mariott.check();
	}else if (test == 3) {
		var holidayInn = new hotelConstructor ("Holiday Inn", ran3, y);
		holidayInn.check();
	}
}


