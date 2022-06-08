// alert("hello khushi");
// document.getElementById("first").innerHTML = "khushi I love  U";

// statement and comment
// operators

//   condition : if & else

// alert . prompt , confirm

// alert("alert function");
// prompt("enter Your age");
// confirm("are Your sure want to delete");

// type consversion

// let type = 4;
// console.log(typeof type);

// string manipulation

// array
// operation on an array

// let book=['maths','bio',12,"english","dsa"];
// book.push("khushi");

// console.log(book.splice(0,1));
// console.log(book.length());

// function

// user define funcction

// multipliaction code

// function multiplication(num){
//     for( i=1;i<=10;i++){
//         document.write(`${num}x ${i}=${num*i}`);
//         document.write("<br>");

//     }

// }
// multiplication(3);
// document.write("<br>");
// document.write("<br>");
// multiplication(31);
// document.write("<br>");
// multiplication(322);
// parameter and argument and argument object

// function add(){
//     if(arguments.length ==0){
//         console.log("no parameter available");

//     }
//     else
//     {
//         let sum=0;
//         for(let i=0;i<arguments.length;i++){
//             sum+=arguments[i];
//         }
//         console.log(sum);
//     }

// }

// add(1,2);
// add(1,2);
// add(1,2,2,22,23,566,-123);

// return in function

// function add(a,b){
//     return a+b;
// }
// let c=add(1,2);
// console.log(c);

// anonymous function
// function expression
// let show = function(){
//     console.log("khushi luv u");
// }
// show();

// set timeout function
// function show()
// {
//     console.log("khushi i luv u")
// }
// setTimeout(show,3000);

// immediately invoked function

// (function(){
//     console.log("hello vikash");
//     alert("hey khushi");
// })();

// object in js and properties of object

// let person = {
//     firstName:"vikku",
//     loveLife:"khushi",
//     MOb:93152222,
//     sayHello(){
//         console.log("hello"+car.brand+"car");
//     }
// };
// console.log(vikash.loveLife);

// person.sayHello=function()
// {
//     console.log("hello ")
// }

// person.sayHello();

// or

// function greet(){
//     console.log("good morning");
// }
// person.sayHello= greet;

// this key word

// let car={
//     brand:"tata",
//     model:"safari"
// }

// person.sayHello();

// maths Object, genrate random number

// console.log(Math.random());

// date <object data="" type=""></object>

// let x= new Date();
// console.log(x);

// new key word
// getter and setter

// var person=
// {
//     name:"vikash",
//     salary:1234,
//     semester:"V"

// }
// console.log()

// object constructor

// function Student(first, last, age, sem) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.sem = sem;
// }
// var st1 = new Student("khushi", "gupta", 19, 4);
// console.log(st1);

// object prototype

// nested Object

// Hoisting

// hoist mean to lift or pull

// hello();
// function hello(){
//     console.log("hello world");
// }

// console.log("after declarelation function")

// console.log(x);
// var x;
// x=7;

// DOM

// select element by id

// let x = document.getElementById("name1");
// x.addEventListener("focus", myfocus);
// x.addEventListener("focus", myblurr);
// function myfocus() {
//   x.style.background = "yellow";
// }
// function myblurr() {
//   x.style.background = "white";
// }
//  Event Bubbling & Event Capturing
//   let anchor = document.getElementById("link");

//   anchor.addEventListener('click',function(e){
//     console.log("linked clicked....");
//     e.preventDefault();

//   })

// console.log("hello")

// **************************************************

// Browser Object Model

// let btn = document.getElementById("id");

// let url = "https://www.google.com";
// let features= "height = 500, width = 500";
// btn.addEventListener("click", function () {
//   window.open(url,'google',features);
// });

// time out and time in

// setTimeout(myfunction,5000);
// function myfunction(){
//     alert("khushi luv u");
// }

// Location Object

// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);

// navigotor object

// console.log(navigator.appName)

// screen Object

// Advanced java script
// ECMASCRIPT

// Default parameter

// function talk(msg="hi "){
//     console.log(msg);
// }
// talk();

// rest parameter

// function sum(...args){
//     // console.log(args);
//     let result = 0;
//     for(let i=0;i<args.lengthl;i++){
//         result=result+args[i];

//     }
//     console.log(result);
// }
// sum(1);

// Spread Operator

// let array1= [1,2,3];
// let array2 =[5,4,6,...array1];
// console.log(array2);

// for of

// let array1= [1,2,3,12,34,56,788];
// for(let x of array1){
//     console.log(x);
// }

// template literals

// let str='hello  \n world';
// console.log(str);

// use backtick for template literals

// object destructing

// let book={
//     name:"DSA",
//     price:399,
//     page:1000
// };
// console.log(book.price)

// ES 6 Module

// ****************oops*********************************

// oops before es6
// let person1 = {
//   name: "vikash",
//   lastName: "kumar",
//   age: 21,
//   phone: 1234,
//   fullName: function () {
//     console.log(this.name + " " + this.lastName);
//   },
// };
// person1.fullName();
// // console.log(person1.name);




// function Person(f_name, l_name, age){
//     this.firstName-f_name;
//     this.LastName=l_name;
//     this.age=age;
// }


// let P= new Person("khushi","gupta",19);
// console.log(P);



// Prototype & Inheritance


// let person1={};
// console.log(person1);
// let person2={
//     name:"khushi"
// };
// console.log(person2);

// class AND Object


// class person{
//     constructor(n,a){
//         this.name= n;
//         this.age=a;


//     }

//     sayHi(){
//         console.log("hi    khushi");

//     }
// }

// let person1 = new person();

// console.log(person1.sayHi);


// Arrow Function

// let sum =(a,b)=>{
//     return a+b

// }
// console.log(sum(1,2));


