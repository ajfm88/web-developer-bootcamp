// Making an array:
const colors = ['red', 'orange', 'yellow'];

// Array of numbers
let lottoNums = [15, 7, 3, 10, 99];

// Mixed array
let stuff = [true, 68, 'cat', null];

// Empty array
let students = [];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Updating arrays
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// Push/Pop/Shift/Unshift Practice
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
// Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
planets.shift();
// Add in "Saturn" at the very end of the planets array
planets.push('Saturn');
// Add "Mercury" as the first element in the planets array.
planets.unshift('Mercury');

//concat - adds / merges two arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// includes - whether a certain array includes a certain value
const array4 = [1, 2, 3];

console.log(array4.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// indexOf - retursn the first index at which a given element can be found in the array
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// reverse - reverses an array in place (it is a destructive method because it modifies the original array)
const array5 = ['one', 'two', 'three'];
console.log('array5:', array5);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array5.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array5:', array5);
// expected output: "array1:" Array ["three", "two", "one"]

// slice - returns a portion of an array. It is non-destructive
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//  splice - changes the content of an array by removing or repl acing existing elements. It is destructive.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Nested Arrays exercise - replace 'null' with 'Hugo'
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo';
