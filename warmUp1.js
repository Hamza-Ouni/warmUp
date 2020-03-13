// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


function partnerName(firstName,lastName){
        return firstName +' ' + lastName;

}


function multiple(n){
     if (n % 13 === 0) {
     	return ('n is a multiple of 13');
     }
     else 
     	return ('n is not a multiple of 13');
}


function ageInSecond (x){
	return ( x*365*24*60*60 );
}


function averageAge(age){
    var sum=0;
        for (var i=0;i<age.length;i++){
           sum=sum+age[i]
           average = sum/age.length     
}
return average;
        }


function averageAge(age){
    var sum=0;
        for (var i=0;i<age.length;i++){
           sum=sum+age[i]
           average = sum/age.length     
}
return average;
        }
var age =[13,14,13,15,16,17,19,13,16,15];

