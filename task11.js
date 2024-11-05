// Task - 1 --->
var arr = ['mom', 'js', 'malayalam', 'html', 'css', 'dad']
// o/p -> ['mom', 'malayalam', 'dad']
for(i=0; i<arr.length; i++){
    // console.log(i +" "+arr[i]);
    var a = arr[i].toString()
    var new1 = ""
    for(j=a.length-1; j>=0; j--){
        new1 += a[j]
    }
    if(arr[i] == new1){
        console.log(arr[i]) // [ mom, malayalam, dad ]
    }
}

// Task - 2 --->
var num = 152;
var str = num.toString().split('')
var sum = 0
for(i=0; i<str.length; i++){
    var a = str[i]**str.length
    sum += a;
}
if(sum == num){
    console.log(`${num} is a ArmStrong Number`)
}else{
    console.log(`${num} is not a ArmStrong Number`)
}