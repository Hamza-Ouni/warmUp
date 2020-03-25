// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
//answer :
5 < 7;
=======
//answer : 5 < 7 ? true : false;

>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
<<<<<<< HEAD
function helloWorld(language) {
  var answer = "";

  switch (language) {
    case "fr":
      answer = "Bonjour tout le monde";
      break;
    case "es":
      answer = "Hola, Mundo";
      break;
    default:
      answer = "Hello, World";
  }

  return answer;
}


//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArr (arr){
	newArr =[];
	var a  = arr.length-1
for (var i =a ; i >= 0 ; i-- ){
	newArr.push(arr[i]);
}
return newArr;
}

=======
var helloWorld = lang => {
  var lang = lang.toLowerCase();

  return lang === ""
    ? "Hello, World"
    : lang === "fr"
    ? "Bonjour tout le monde"
    : lang === "es"
    ? "Hola, Mundo"
    : lang === "ar"
    ? "صباح الخير"
    : null;
};

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
var reverse = arr => {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
