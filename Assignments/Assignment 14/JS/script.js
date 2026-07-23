// =====================================================
// =====================================================

const fruits = ["Apple","Banana","Orange"]; 

for (let fruit of fruits) console.log(fruit);

for (let index in fruits) console.log(index);

fruits.forEach((fruit , index) => {console.log(`${index} =>${fruit}`);
})

// =====================================================
// =====================================================

function sum(a,b){ return a+b; }

let sum = ( a , b ) => {a+b};

// =====================================================
// =====================================================

const user = { name:"Mostafa", age:25 }; 

let { name , age } = user;

// =====================================================
// =====================================================

console.log("Hello " + name); 

console.log(`hello ${name}`); 

// =====================================================
// =====================================================

const arr1 = [1,2,3]; 
const arr2 = [4,5,6]; 

const arr3 = [arr1 , arr2];
console.log(arr3);

// =====================================================
// =====================================================

const students = [ 
{name:"Ali", degree:70}, 
{name:"Sara", degree:95}, 
{name:"Ahmed", degree:40}, 
{name:"Mona", degree:85}, 
{name:"Omar", degree:55} 
]; 

let names = students.map((student) => student.name);
console.log(student);
let names = students.filter((student) => student.degree >= 60);
console.log(student);
let names = students.find((student) => student.degree > 90);
console.log(student);
console.log( students.forEach(student => {console.log(student.name)
}));

// =====================================================
// =====================================================

const numbers = [5,10,15,20]; 

let first=0;
numbers.reduce (
(first , current) => first + current , 0 );
console.log(current);


// =====================================================
// =====================================================

