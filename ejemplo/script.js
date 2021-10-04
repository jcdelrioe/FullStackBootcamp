/*Tipos de variable primitivos y son inmutables
number
String
Boolean
undefined
null
BigInt
Symbol
*/

// const firstName = "Miguel";
// firstName.toUpperCase();
// console.log(firstName);
// firstNameWUC = firstName.toUpperCase();
// console.log(firstNameWUC);

// const list = [];
// list.push(1);
// console.log(list);

// const list = [];
// const anotherList = list.concat(157);
// console.log(anotherList);

// const list = [];
// const anotherList = list.concat(157);

const persona = {
	name: "Miguel",
	twitter: "@midudev",
	age: 48,
	isDeveloper: true,
	links: ["https://midu.tube", "https://midu.live"],
};

const field = "twitter";

console.log(persona.name);
console.log(persona.links[0]);
console.log(persona[field]);

const sumar = (num1, num2) => {
	console.log(num1);
	console.log(num2);
	return num1 + num2;
};

function restar(a, b) {
	return a - b;
}

console.log(sumar(2, 4));
console.log(restar(2, 4));

console.log(sumar(2, "cuatro")); // inferencia
