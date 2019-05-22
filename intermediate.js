var ran = Math.floor(Math.random() * 10) + 1;
console.log(ran);

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
		var hilton = new hotelConstructor("Hilton", ran, prompt("How many nights?"));
		hilton.check();
	}else if (test == 2) {
		var mariott = new hotelConstructor("Marriott", ran, prompt("How many nights?"));
		mariott.check();
	}else if (test == 3) {
		var holidayInn = new hotelConstructor ("Holiday Inn", ran, prompt("How many nights?"));
		holidayInn.check();
	}
}


