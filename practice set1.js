//switch case with string
/*let colour= "yellow";

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
}*/
//greatest amoung four numbers

/*let num1 = 10;
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

console.log('The greatest number is:', greatest);*/

//calculate which day based on given numbers
//loop

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
//we have print all even and odd number btw 0-20
/*let a=5
if (a%2==0){
    console.log("even no.")
}else{
    console.log("odd no.")
}

for(i=0;i<=20;i++){
    if(i%2==0){
        console.log(`number is even ${i}`)
    }else{
        console.log("number is odd", i)
    }
}*/

/*let a=3
let b="6"
console.log( typeof +a)
console.log(a + +b)*/

//array

/*let id=[1,2,3,4,5,6,7,8,9]
let Name =['noni', 'aditi', 'ayush', 'riya', 'gudia', 'shivam', 'parag', 'chirag', 'nonu'  ]
let course =['B.sc', 'BCA', 'B.tech', 'MCA', 'Msc', 'MCA', 'Bcom', 'BCA', 'B.sc']
let person= ["RG sharma", "nagpur", "975806", "365", "37", "true"]
console.log(Name[8])*/

//pop shift unshift push
//Name.push('noni')
//console.log(Name)

//let A= [1,2,3,4,5,6,7,8]
//let B= ["hello", 10,20,30,40,50,60,70,80]

//let C= [...A, ...B]
//console.log(...A)

//for in for of
 /*for(i in B){
    console.log(i)
 }
 for(i of B){
    console.log(i)
 }*/

/*for(i in A){
    //console.log(A[i])
    if(i%2==0){
        console.log(i)
    }
}*/

/*for(i=0;i<A.length;i++){
    //console.log(A[i])
    if(A[i]%2==0){
        console.log(A[i])
    }
}*/
/*let FirstQuestionArray =[10,20,10,30,40,10,50,70,80]

let B= [10,20,30,40,50,60,70,80]
let numberToCheck = 50;

if (B.includes(numberToCheck)) {
    console.log(numberToCheck + " is present in the array.");
} else {
    console.log(numberToCheck + " is not present in the array.");
}*/

/*let key =10
for(k in FirstQuestionArray){
    if(FirstQuestionArray[k]==key){
        console.log('yes')
    }
}*/

/*let count =0
let key =10
for(j in FirstQuestinArray){
   if(j in FirstQuestionArray[j]==key){
    count ++
}
}
console.log(`yes its exits ${count} times`)*/


/*let Arr= [1, 20, 10, 30, 40, 10, 50, 70, 10]
let max=0
for(i=0; i<Arr.length-1; i++){
    if(Arr[i]> max){
        max= Arr[i]
    }
}
console.log(max)*/

/*let Arr =[1,20,10,30,40,10,50]

let sum =0
for(k in Arr){
    sum+=Arr[k]
}
console.log(sum)*/

let Arr =[1,20,10,30,40,10,50,70,10]
let max=0
let min=0
for(i=0; i<Arr.length;i++){
    if(Arr[i]>max){
        min =max
        max =Arr[i]
    }
}
console.log(`max is ${max} and min is ${min}`)
