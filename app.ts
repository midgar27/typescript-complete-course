// string
let myName: string = 'Rob';
// myName = 28;

// number
let myAge: number = 27;
// myAge = 'Rob';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ['Superstreet', 99];

// enum
enum Color {
  Gray,
  Green = 100,
  Blue = 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// console.log(address[1]);

// console.log(hobbies[0]);
// console.log(typeof hobbies);

// console.log('myName = ' + myName);
// console.log('myAge = ' + myAge);
// console.log('hasHobbies = ' + hasHobbies);
// console.log('myRealAge = ' + myRealAge);
