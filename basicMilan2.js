
function submitData() {
			var arg1 = document.forms["sentence1"]["arg1"].value;
			var arg2 = document.forms["sentence1"]["arg2"].value;
 			var arg3 = document.forms["sentence1"]["arg3"].value;
    
			var result = document.getElementById('text');
 
			result.innerHTML = "<h2>My name is "+arg1+". My surname is "+arg2+". I am "+arg3+" years old.</h2>";
			return false;	
		}

