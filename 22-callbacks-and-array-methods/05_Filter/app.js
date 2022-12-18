const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// our callback returns true or false, if it returns true, n is added to the filtered array
const lessThanTen = numbers.filter((n) => {
  return n < 10;
});

// lessThanTen would be [1, 2, 3, 4, 5, 6, 7, 8, 9]

const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984,
  },
  {
    title: 'Sharknado',
    score: 35,
    year: 2013,
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004,
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986,
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1995,
  },
  {
    title: 'Jingle All The Way',
    score: 71,
    year: 1996,
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019,
  },
  {
    title: 'Notting Hill',
    score: 77,
    year: 1999,
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979,
  },
];

const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 2000);

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

movies.filter((m) => m.score > 80).map((m) => m.title);

// Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]

function validUserNames(usernames) {
  return usernames.filter((username) => username.length < 10);
}
