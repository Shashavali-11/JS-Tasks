// 1) Question ?
var score = 70;

// -- Type - 1 --->
(score >= 90)
  ? console.log("Excelent")
  : ((score >= 60) && (score < 89))
  ? console.log("Good")
  : (score < 60)
  ? console.log("Needs Improvement")
  : consol.log();


// -- Type - 2 --->
// (score >= 90)?console.log("Excelent"):console.log();

// (score >= 60 && score < 89)?console.log("Good"):console.log();

// (score < 60)?console.log("Needs Improvement"):console.log();
console.log()
// ------------------------------------------------------------------>

// 2) Question ?
var day = "Monday";
(day == 'Friday' || day == 'Saturday' || day == 'Sunday')?console.log("Weekend.") : (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday')?console.log("Weekday.") : console.log("Enter day properly...")
console.log()
// ------------------------------------------------------------------>


// 3) Question ?
var inputstr = "racecar"
var newstr = ""
for(i=inputstr.length-1; i>=0; i--){
    newstr += inputstr[i]
}
if(inputstr == newstr){
    console.log("Palindrome.")
}else{
    console.log("Not a Palindrome.")
}
console.log()
// ------------------------------------------------------------------>


// 4) Question ?
var str = "HELLO"
var n = ""
for(i=0; i<str.length; i++){
    n += str[i]
    console.log(n)
}
console.log()