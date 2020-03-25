// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
<<<<<<< HEAD
function isArray (input){
	if (Array.isArray(input)){
		return true;
	}
	return false;
   }
=======

var isArray = array => (Array.isArray(array) ? true : false);
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
<<<<<<< HEAD
//    first([1,2,3,4]2)=>[1,2]
<<<<<<< HEAD
function firstElement (array){
	array === [];
	return array[0];
}
=======
var first = (arr, n) => arr.splice(0, n);
>>>>>>> 542e878735fb7d381c1d2089efdfe92c5a97bbd6
=======
//    first([1,2,3,4],2)=>[1,2]
>>>>>>> 0e47aea7be29872390744ebf393e4da84d716048

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function convert (obj){
	return (Object.entries(obj));
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
