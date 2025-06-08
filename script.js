// **  forEach2

console.log("forEach2:");

Array.prototype.forEach2 = function (callback, thisArg) {
  const range = this.length;
  for (let i = 0; i < range; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};
console.log("--------------------------");
const people = ["people 1", "people 2", "people 3"];
const number = [1, 2, 3];
const missNumber = [1, , 3];

people.forEach2(function (people, index, arr) {
  console.log(people, index, arr);
});

number.forEach2(function (number, index, arr) {
  console.log(number, index, arr);
});
missNumber.forEach2(function (number, index, arr) {
  console.log(number, index, arr);
});
console.log("--------------------------");
// ** find2
console.log("find2:");
Array.prototype.find2 = function (callback, thisArg) {
  const range = this.length;

  for (let i = 0; i < range; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
};

const findNumber = [1, 23, 3];
const findPeople = [
  {
    name: "find people 1",
    age: 22,
  },
  {
    name: "find people 1",
    age: 21,
  },
];

console.log(findNumber.find2((num) => num > 3));
console.log(findPeople.find2((people) => people.age < 22));
console.log(findPeople.find2((people) => (people.age = 22)));
console.log("--------------------------");
// ** findIndex2
console.log("findIndex2");
Array.prototype.findIndex2 = function (callback, thisArg) {
  let range = this.length;
  for (let i = 0; i < range; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
};

const findNumberIndex = [1, 23, 3];
const findPeopleIndex = [
  {
    name: "find people 1",
    age: 22,
  },
  {
    name: "find people 1",
    age: 21,
  },
];

console.log(findNumberIndex.findIndex2((num) => num > 3));
console.log(findPeopleIndex.findIndex2((people) => people.age < 22));
console.log(findPeopleIndex.findIndex2((people) => (people.age = 22)));
console.log("--------------------------");

// filter2
console.log("filler2:");
Array.prototype.filter2 = function (callback, thisArg) {
  let range = this.length;
  let res = [];

  for (let i = 0; i < range; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter2((num) => num % 2 === 0);
console.log(even); // [2, 4]
const peopleFilter2 = [
  { name: "People 11", age: 11 },
  { name: "People 18", age: 18 },
  { name: "People 12", age: 12 },
];

const adults = peopleFilter2.filter2((person) => person.age >= 18);
console.log(adults);

const young = peopleFilter2.filter2((person) => person.age < 18);
console.log(young);
console.log("--------------------------");

// map2
console.log("map2");
Array.prototype.map2 = function (callback, thisArg) {
  let range = this.length;
  let res = [];

  for (let i = 0; i < range; i++) {
    if (i in this) {
      res[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return res;
};

const numberMap2 = [1, 2, 3, 4];
const doubleNumber = numberMap2.map((num) => num * 2);
console.log(doubleNumber);
const divideNumber = numberMap2.map((num) => num / 2);
console.log(divideNumber);
const subtractNumber = numberMap2.map((num) => num - 2);
console.log(subtractNumber);
console.log("--------------------------");
