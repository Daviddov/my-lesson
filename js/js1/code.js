
// document.getElementById("myTitle").innerHTML = "Hello World";

console.log("Hello World");
let score = 7;
const speed = 15; 
let alive = true;
if (alive == true){
    x= 20;
}else{
    x = 10;
}

let fristName = "David";
let lastName = "Bar or";
let age = 32;
let strnum = "70";
let myNum = Number(strnum);

console.log(`My name is ${fristName} ${lastName} and I am ${age} year old`);
console.log(fristName.length);
console.log(lastName.slice(0,3));
console.log(lastName.toUpperCase());
console.log( typeof fristName);
console.log(strnum + 4);
console.log(myNum + 4);


let usstr = "Bamba";
console.log(usstr.substring(0, 1));
let newName = fristName.replace("David", "Dov");
console.log(newName);

let age1 = ++age;
let age2 = age++;
console.log(age1);
console.log(age2);
