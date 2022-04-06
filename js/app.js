let	subjOne = [10, 20, 30, 40, 50];
let	total = subjOne[0] + subjOne[1] + subjOne[2] + subjOne[3] + subjOne[4];
let average = total / subjOne.length;
// console.log(total);
console.log(average);

let obj1 = {
	name: "giorgi",
	age: 27,
};
let obj2 = {
	name: "dato",
	age: 23,
};
let obj3 = {
	name: "nika",
	age: 32,
};
let obj4 = {
	name: "anano",
	age: 25,
};
let obj5 = {
	name: "salome",
	age: 19,
};

let subjTwo = [obj1, obj2, obj3, obj4, obj5];
// console.log(subjTwo[2]);

let subjThree = {
	firstName: "Giorgi",
	lastName: "Orbeladze",
	adress: ["tbilisi, varketili", "tbilisi, saburtalo"],
	age: 27,
	phoneNumbers: ["579266775", "599988987"],
};
let myInfo = `My name is ${subjThree.firstName} ${subjThree.lastName}, my age is ${subjThree.age}, my adress is ${subjThree.adress[0]}`
console.log(myInfo);