//switch case with string
let colour= "yellow";

switch (colour) {
    case "yellow":
        console.log(" colour is yellow");
        break;
    case "red":
        console.log("colour is red");
        break;
    case "green":
        console.log(" colour is green");
       break;
    default:
        console.log("invalid colour");
        break;
}
//greatest amoung four numbers

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

let greatest;

if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    greatest = num1;
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    greatest = num2;
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
    greatest = num3;
} else {
    greatest = num4;
}

console.log('The greatest number is:', greatest);

//calculate which day based on given numbers

/*let n=5
//while(n<10){
   // console.log(n)
   // console.log("you are")
   // n++
}*/

 

 /*let n=10;
//while(n<21){
    //console.log(n)
   // n++
}*/

/*let n=20;
//while(n>=10){
  //  console.log(n)
    //n--
}*/

/*let i = 1;

while (i <= 10) {
    console.log(i*5);
    i++;
}*/




