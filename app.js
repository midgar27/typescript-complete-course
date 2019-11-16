"use strict";
// string
var myName = 'Rob';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Rob';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// console.log(address[1]);
// console.log(hobbies[0]);
// console.log(typeof hobbies);
// console.log('myName = ' + myName);
// console.log('myAge = ' + myAge);
// console.log('hasHobbies = ' + hasHobbies);
// console.log('myRealAge = ' + myRealAge);
