// ====================
// DEFINING METHODS
// ====================

const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter
// area should accept the length of a side (all sides are the same in a square) and then return the side squared.
// perimeter should accept the length of a side and return that side multiplied by 4.
// square.area(10) //100
// square.perimeter(10) //40

let square = {
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * 4;
  },
};

// ====================
// THE 'THIS' KEYWORD
// ====================

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log('THIS IS:', this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

const meow2 = cat.meow;

cat.meow();
// 'THIS IS:', cat object here

meow2();
// 'THIS IS:', WINDOW OBJECT HERE
// because it is almost liek window.meow2();

// It is added to the window object
function scream() {
  console.log('AAAAAAAAAAAAAAAHHHHHHHHHH!!!');
}

scream();
// returns AAAAAAAAAAAAAAAHHHHHHHHHH!!!

// It is added to the window object
window.scream;

// =====================================================================
// Egg Laying Exercise
// Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.
// =====================================================================
let hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount++;
    return 'EGG';
  },
};
