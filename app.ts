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

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello');
}

sayHello();

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Rob'));
console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// console.log(address[1]);

// console.log(hobbies[0]);
// console.log(typeof hobbies);

// console.log('myName = ' + myName);
// console.log('myAge = ' + myAge);
// console.log('hasHobbies = ' + hasHobbies);
// console.log('myRealAge = ' + myRealAge);
