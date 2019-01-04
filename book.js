// Javascript objects


var o1 = Object.create({x:1, y:2});
var o2 = Object.create(null);
var o3 = Object.create(Object.prototype);
// console.log(o3);


function inherit(p){
  if(p == null) throw TypeError();
  if(Object.create)
    return Object.create(p);
  var t = typeof p;
  if (t !== "object" && t !== "function") throw TypeError();
  function f() {};
  f.prototype = p;
  return new f();
}


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
