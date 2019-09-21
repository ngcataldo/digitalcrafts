//EXERCISE pt.1
// We are going to have an array of items
// We are going to create a function with 2 parameters 
// The first function will be an array to search 
// The second parameter will be a value to find 

//EXERCISE pt.2
// Inside the function, use a for loop to go through the array
// return true if it finds the second parameter inside the array
// otherwise return false

//MY NOTES
//to create a function look at var function name = function() {
// parameters in this example are haystack and needle
// haystack is the array that you are looping through the 2nd parameter
var items = ["Cat", "Dog", "Snake", "Ferret", "Big Foot"];

var findItem = "Big Foot"; 

var searchItems = function(haystack, needle)  {

	for(var i=0; i<haystack.length;i++)   {
		if(haystack[i] == needle){
			return true;
		}
	}

	return false; 

}

var result = searchItems(items,findItem);
console.log(result);





//	my work with Tony
//	var SearchArray = function(finditem, items)  {

//	for(var i=items.length; i>0; i--){
//		if (items.indexOf("finditem"); 
//			return



//	}
//} 
