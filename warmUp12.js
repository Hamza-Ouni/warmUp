// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
	function reverse (string){
	var string1 = "";
	var i = string.length;
	var j = 0;
	while (i > 0){
      string1 = string1 + string[string.length-1] +j;
      string = string.slice(0,-1);
      i--;
      j++;
	}
	return string1;
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLengthString(array){
	var arr =[];
	var i = 0;
	while(i < array.length){
		array[i].length = array[i+1].length;
		arr.push(aray[i]);
		arr.push(aray[i+1])
		i++;
	}
	return arr;
}