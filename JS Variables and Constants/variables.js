//Constants and Variables

const PI = 3.14;
let radius = 3;
area = radius * radius * PI;

console.log(area)

radus = 1256;

console.log(radus)

//Type Coersion

const one = 1;
const two = '2';
area = one + two;

console.log(area)

const one1 = 1;
area = one1 + one1;

console.log(area)

const two2 = 2;
area = one1 + two2;

console.log(area)

//Global and Block Scope


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    
