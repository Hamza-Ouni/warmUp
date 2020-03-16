// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function laregerAndSmaller (str1, str2){
	if (str1.length > str2.length) {
		return str1 +','+ str2
	}
	else 
		return str2 +','+ str1
}


// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// 
function counting(n) {
	var str='';
	var result=0;
		for (var a=1 ; a<n ; a++) {
			str = str +a +',';
  		 	}
			result = str +n;

		return result ;
			}

// } 
// counting(5); // => '1, 2, 3, 4, 5' 
// counting(1); // => '1' 
// counting(3); // => '1, 2, 3'


// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
function meetAndGreet (n){    
		for (var i=1 ; n>0 ; i++)		
			if (n=1){
				return 'welcome'+n;
			}
			else if (n=2){
				return 'welcome'+n+' '+ 'meet'+i;
			}
			else if (n=3){
				return 
			}
		
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestWord (string){

}

