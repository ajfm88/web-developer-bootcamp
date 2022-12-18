const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const movies = [
  {
    title: 'Amadeus',
    score: 99,
  },
  {
    title: 'Stand By Me',
    score: 85,
  },
  {
    title: 'Parasite',
    score: 95,
  },
  {
    title: 'Alien',
    score: 90,
  },
];

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames,
// so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  { first: 'Albus', last: 'Dumbledore' },
  { first: 'Harry', last: 'Potter' },
  { first: 'Hermione', last: 'Granger' },
  { first: 'Ron', last: 'Weasley' },
  { first: 'Rubeus', last: 'Hagrid' },
  { first: 'Minerva', last: 'McGonagall' },
  { first: 'Severus', last: 'Snape' },
];

// Write your code here
const firstNames = fullNames.map(function (names) {
  return names.first;
});
