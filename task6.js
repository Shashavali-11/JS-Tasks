// 1) Question ?
//  Traffic Light System
var signal = "red0";

if (signal == "red") {
  console.log("Stop!");
} else if (signal == "orange") {
  console.log("Slow Down!");
} else if (signal == "Green") {
  console.log("Go...!");
} else {
  console.log("Invalid Input...?");
}

//  2) Question ?
// Weather Description (Temperature Descriptions)
// Write a program that describes the temperature:

var temp = 20;

if(temp == 0){
    console.log("It is Freezing Cold!")
}else if(temp <= 15){
    console.log("It is cool day!")
}else if(temp <= 25){
    console.log("It is pleasant day!")
}
else{
    console.log("Unknown weather?")
}

//  3) Question ? Day of the Week  
// Create a program that takes input of a number representing the day of the week (1-7):

var day = 7
if(day == 1){
    console.log("Monday.")
}else if(day == 2){
    console.log("Tueday.")
}else if(day == 3){
    console.log("Wednesday.")
}else if(day == 4){
    console.log("Thursday.")
}else if(day == 5){
    console.log("Friday.")
}else if(day == 6){
    console.log("Saturday.")
}else if(day == 7){
    console.log("Sunday.")
}
else{
    console.log("Invalid day number.")
}


