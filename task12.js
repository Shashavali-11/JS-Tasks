//  1) Write a function to check wheather input num is even or odd ?
var number = 11;
even(number)  // 11 is an odd number.
function even(num){
    if(num%2 == 0){
        console.log(`${num} is an even number.`)
    }else{
        console.log(`${num} is an odd number.`)
    }
}
// ------------------------------------------------------------------------------------------------>


//  2) Write a function to check wheather input string is palindrome or not ?
var string = "MOOM"
palindrome(string) // MOOM is a Palindrome.
function palindrome(str){
    var newstr = ""
    for(i=str.length-1; i>=0; i--){
        newstr += str[i];
    }
    if(str == newstr){
        console.log(`${str} is a Palindrome. `)
    }else{
        console.log(`${str} is not a Palindrome. `)
    }
}
// ------------------------------------------------------------------------------------------------>


//  3) Write a function to check largest num among three numbers ?
var number1 = 70;
var number2 = 90;
var number3 = 130;
max(number1, number2, number3) // 130 is a Maximum.
function max(num1, num2, num3){
    if((num1>num2) && (num1>num3)){
        console.log(`${num1} is Maximum.`)
    }else if((num2>num1)&&(num2>num3)){
        console.log(`${num2} is Maximum.`)
    }else{
        console.log(`${num3} is Maximum.`)
    }
}

