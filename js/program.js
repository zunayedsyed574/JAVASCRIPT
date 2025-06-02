// variables let & const 
// let ->it can be changed but const->it can not be changed
let agee=10;

const score=411;
console.log("AGE = ",agee,"SCORE = ",score);

// Data types 

      const name="john";
const age=30;
const is_cool=true;
const rating=4.5;
const y=undefined
const x =null 
 
const helo = "my name is ${name}";
console.log(helo)
//Strings 
undefined
const s="ZUNAYED";
console.log(s.length);
console.log(s.substring(0,2));
console.log(s.toLowerCase());
console.log(s.split(""));

// Arrays 

const fruits = ["apples","oranges","pears"];
fruits[3] = "grapes";
fruits.push("mango");
fruits.unshift("Strawberries");
console.log(fruits);
console.log(fruits.indexOf("oranges"));

//arrays of object & JSON

const todos=[
	{
		id : 1,
		text : "Take out Trash",
		is_completed : true 
	},
	{
		id : 2,
		text : "Meeting with boss",
		is_completed : true 
	},
	{
		id : 3,
		text : "Dentist appt",
		is_completed : false
	},
];

const todoJSON =JSON.stringify(todos);
console.log(todoJSON);


// loops
// for loops
for (let i =0;i<10;i++){
	console.log(i)
}

// while loops 

let i=0;
while (i<10){
	console.log("while loop = ",i);
	i++;
}


// loop on array 
for(let todo of todos){
	console.log(todo.text);
}

// conditionals

const z=5;

if (z>9){
	console.log("Nice");
}else{
	console.log("WHAT");
}

let namee="zunayed";

if(namee=="AHmed" && namee=="zunayed"){
	console.log("Nice")
}


// switch 

let day="sunday";

switch(day){
	case "friday":
	console.log("today is a jumma");
	break;

	case "saturday":
	console.log("today is a holiday");
	break;

	default:
		console.log("day")
}

// functions 

function addnums(num1,num2){
	return num1+num2;
}
console.log(addnums(5,5))

//Constructer Function 

function persons(name,age){
	this.name=name;
	this.age=age;
}

let person1 = new persons("Asif",25);

console.log("NAME = ",person1.name);
console.log("AGE = ",person1.age);

//Prototype 

function person5(name,age){
	this.name=name;
	this.age=age;
}
person5.prototype.greet=function(){
	console.log('hello I am ',this.name,"I am ",this.age,"years old");

}

let p1 = new person5("Zunayed","25");
p1.greet();

//ES6 class

class person2{
	constructor(names,ages){
		this.names=names;
		this.ages=ages;
	}
	greets(){
		console.log(`hi ${this.names}`)

	}
}

let p7=new person2("zunayed",12);
p7.greets()








