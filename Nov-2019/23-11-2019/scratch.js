// // 'let' is only works in a scope
// if (true) {
//     let a = 40;
//     console.log(a);
// }

// console.log(a);
// -----------------------------------------------------------
// //'const' is a fixed value, cannot be changed
// const a = 50;
// a = 60;
// const b = 'nice day'
// b = 'good weather'
// //you cannot directly replace the array, but you can push elements in to the array,
// const language = ['JS', 'JAVA',' Python','ruby']
// console.log(language);
// language.push('react');
// console.log(language);
// -----------------------------------------------------------
// // different syntax, new VS old
// function oldOne() {
//     console.log('Hello World');
// }
// oldOne();
// var newOne = () => {
//     console.log('Hi');
// }
// newOne();

// let newOneWithParameters = (a, b) => {
//     console.log(a + b);
// }
// newOneWithParameters(3, 5);
// -----------------------------------------------------------
////default value
// let Func = (a, b = 10) => {
//     return a + b;
// }
// console.log(Func(20));
// console.log(Func(20, 50));
// -----------------------------------------------------------
// // for of loop   return the value of arr,   for in loop  return the index of arr
// let arr = [1, 2, 5, 3, 4];
// for (let value of arr) {
//     console.log(value);
// }

// let string = "Javascript";
// for (let char of string) {
//     console.log(char);
// }
// -----------------------------------------------------------
// // spread attributes  the spread attribute converts the array to list of elements.
// let SumElements = (arr) => {
//     console.log(arr);
//     let sum = 0;
//     for(let element of arr) {
//         sum += element;
//     }
//     console.log(sum);
// }
// SumElements([10, 20, 30, 40])

// let SumElements = (...arr) => {
//     console.log(arr);
//     let sum = 0;
//     for (let element of arr) {
//         sum += element;
//     }
//     console.log(sum);
// }
// SumElements(10, 20, 30, 50);

// let arr = [10, 20, 60];
// console.log(Math.max(arr));

// console.log(Math.max(...arr));
// -----------------------------------------------------------
// // map 
// var NewMap = new Map();
// NewMap.set('name', 'John');
// NewMap.set('id', 23123);
// NewMap.set('interest', ['js', 'ruby', 'python']);
// console.log(NewMap.get('name'));
// console.log(NewMap.get('id'));
// console.log(NewMap.get('interest'));

// var map = new Map();
// map.set('name', 'John');
// map.set('id', 10);
// console.log(map.size);
// console.log(map.keys());
// console.log(map.values());
// for (let key of map.values()) {
//     console.log(key);
// }

// var map = new Map ();
// map.set('name', 'John');
// map.set('id', 10);
// for (let [key, value] of map) {
//     console.log(key + "-" + value);
// }
// -----------------------------------------------------------
// //static 
// class Example {
//     static Callme() {
//         console.log('Static Method');
//     }
// }
// Example.Callme();
// -----------------------------------------------------------
// // getters and setters
// class People {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
//     setName() {
//         this.name = name;
//     }
// }
// let person = new People('Jon Snow');
// console.log(person.getName());
// person.setName('Dany');
// console.log(person.getName());
// -----------------------------------------------------------
// -----------------------------------------------------------


