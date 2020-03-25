// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD
function myTrueFun(){
	return true ;
}

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
function color (str){
	if (typeof str === "string"){
		return true;
	}
	return false;
}

=======
var myTrueFun = () => {
  return true;
};
// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
var color = input => {
  return typeof input === "string" ? true : false;
};
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function primeNumber (n){
	if ( (n % 2 != 0 && n % 3 != 0) || (n === 2) || (n === 3) ) {
		return "That is a prime number ";
	}
	return "that is not a prime number";
}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
<<<<<<< HEAD
function sameNumber (a, b){
	if (a == b){
		return true;
	}
	return false;
}
=======
var same = (number1, number2) => {
  return number1 === number2 ? true : false;
};
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
