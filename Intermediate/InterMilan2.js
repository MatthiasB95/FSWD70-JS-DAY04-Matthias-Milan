
function submitData() {
			var arg1 = document.forms["sentence1"]["arg1"].value;
			
			var arg2 = Math.floor(Math.random() * 10);
				if (arg1 <= arg2){
				document.getElementById('text1').innerHTML="Available";
				}

				else { 
				document.getElementById('text1').innerHTML="Not Available";    
				}

				return false;		
				}

		var hotel = {
			name: "Hilton",
			numberofnights : prompt("type how many nights you need");
			rooms : 190,
			booked : 100,
			gym : true,
			check : function(){
				return this.rooms - this.booked;
			},
			result : function(){
				if(this.check() > numberofnights){
					console.log("not available");
				}else {
					console.log("available");
				}
			}

		}

		

		 console.log(hotel.booked);
		 console.log(hotel.check())
	
/*
Create three objects of type hotel. Each of them shares some properties and methods. 
The user should be able to insert a number of nights for each hotel and get back results, whether the hotel is available or not (for some number of nights). 
For each hotel generate random integers from 1-10 that store available nights. 
If the hotel is available, provide a button labeled "I'll reserve" otherwise provide a message with text "Sorry, no free room for <number_of_nights> nights".
Try to style the program with the colors #003580, #FFFFFF and #E9F0FA.
*/


