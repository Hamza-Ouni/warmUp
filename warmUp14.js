// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array1, array2){
	for (var j = 1 ; j < array2.length ; j++){
	for (var i =0 ; i < array1.length ; i++){
		if(array2[0] === array1[i] && array2[j] === array1[i+1] && array1.length > array2.length){
		}
 return true;
		}
	}

}