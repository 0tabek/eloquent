// Index starts with [0]
// .length and ["length"] is the same thing.

// in operator tells whether that object has a property with that name.
let anObject = {left: 1, right: 2};
// console.log("right" in anObject);
// Object.keys shows what properties object has.
Object.keys({x: 0, y: 0, z: 2});
// Object.assign function copies all properties from one object into another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b:3, c:4});

// Mutability
const score = {visitors: 0, home: 0};
score.visitors = 1;
// score = {visitors: 1, home: 1}; False

// Further arrayology

let todoList = [];
function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

// Strings and their properties

// trim
// console.log("  okay \n ".trim());
// → okay



// Exercises

// Ex1: The sum of a range

const range = function (v1, v2, step) {
    // for Array
    let rangeList = [];
    // step empty?
    if (typeof step === 'undefined') {
      step = 1
    }
    if(step > 0){
      for (var i = 0; v1 <= v2; i++) {
        // to add to Array
        rangeList[i] = v1;
        //to increase value
        v1+=step
      }
    }
    else {
      for (var i = 0; v1 >= v2; i++) {
        // to add to Array
        rangeList[i] = v1;
        //to decrease value
        v1+=step
      }
    }
    return rangeList;
}

const sum = function (valToSum) {
    let sum = 0;
    for (variable of valToSum) {
      sum+=variable;
    }
    return sum;
}

// Ex2: Reversing an array

const reverseArray = function (array) {
  let output = [];
  for (variable of array) {
    reverseArray.unshift(variable);
  }
  return output;
}

// Checked for solution
const reverseArrayInPlace = function () {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// Ex3: A List

// [1,3,5]

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20


// Ex4: Deep comparison
let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "a"}, object: 2};
let obj3 = {al: 1 , he: 2};


function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}




console.log(deepEqual(obj, obj));
//
// console.log(deepEqual(obj, {al: 1, object: 2}));
//
// console.log(deepEqual(obj, {here: 1, object: 2}));
