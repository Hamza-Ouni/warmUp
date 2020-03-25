// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors

var femaleInOurClass = ["Amira", "Mariem", "Sirine", "Chayma"];
var maleInOurClass = ["Bassem", "Youssef", "Ahmed", "Mohamed", "Oussama"]
var instuctorsOfOurClass = ["Farouk", "Omar", "Hashem", "Anas", "Seif", "Houda", "Dhia", "Insaf", "Jihad"]


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function elementInTheMiddle(array){
	if (array.length % 2 !== 0){
		return array[(array.length-1)/2]
}
  	return "we cannot identify the middle element of this array";

  }

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multipliedBy2(array){
	for(var i = 0 ; i < array.length ; i++){
				array[i] = array[i] * 2;
	}
}