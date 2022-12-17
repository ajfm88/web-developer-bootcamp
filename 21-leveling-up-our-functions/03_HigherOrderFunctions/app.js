// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log('CONGRATS, I AM A GOOD FUNCTION!');
      console.log('YOU WIN A MILLION DOLLARS!!');
    };
  } else {
    return function () {
      alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
      alert('STOP TRYING TO CLOSE THIS WINDOW!');
    };
  }
}

// makeBetweenFunc(50, 100);

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//   return num >= 1 && num <= 10;
// }

// my factory of functions
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

makeBetweenFunc(100, 200); // returns a function
// It returns this function
const testRange = function (num) {
  return num >= 100 && num <= 200;
};

const isChild = makeBetweenFunc(0, 18);

isChild(40); // returns FALSE

isChild(7); // returns TRUE

const isAdult = makeBetweenFunc(19, 64);

const isSenior = makeBetweenFunc(65, 120);

isSenior(40); // returns FALSE

isSenior(90); // returns TRUE
