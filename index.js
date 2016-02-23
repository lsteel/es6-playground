'use strict';
//
// //Arrow functions
//
// var arr = [1, 5, 3, 8, 2, 6, 4, 8 ];
// var evens = arr.filter((num) =>  !(num % 2));
//
// console.log(evens);
//
// var me = {
//   name: 'Lorin Steel',
//   friends: [],
//   sayHi: function() {
//     this.friends.forEach((friend) => {
//       console.log(this.name + ' says hi to ' + friend);
//     });
//   }
// }
//
// me.friends.push('Jack Black');
// me.friends.push('Johnny Depp');
//
// me.sayHi();
//
//
// //Classes
//
// class Animal {
//   constructor() {
//
//   }
//   bark() {
//
//   }
//   static getAllAnimals() {
//
//   }
// }
//
//
// //Object Literals
//
// var sameValue = 'some thing';
// var obj = {
//   key: 'value',
//   func: function() {
//
//   },
//   sameValue: sameValue
// };
//
// var newKey = 'foo';
//
// var obj = {
//   key: 'value',
//   [newKey + 'Key']: 'new value',
//   myFunc() {
//
//   },
//   sameValue
// };
//
// obj.foo = 'new value';
//
//
// //Template Strings
//
// var str = 'str';
// var newStr = "str";
// var templateStr = `str`;
//
//
// str = `
//   foo
//   bar
// `
//
// var firstName = "Lorin";
// var lastName = "Steel";
//
// console.log(`${firstName} ${lastName}`);
// console.log(`${lastName}, ${firstName}`);



// //Destructuring
//
// //an arr
//
// var arr = [10, 2, 3 ];
// var first = 'blah';
//
// console.log(first);
//
// var [ first, second, , fourth = 'foo' ] = arr;
//
// console.log(first, second, fourth);
//
//
// //an Object
//
// var point = {
//   x: 5,
//   y: 10,
//   z: -5,
//   nested: {
//     foo: 'bar'
//   },
// };
//
// var {
//   x: horizontalCoord,
//   y: verticalCoord,
//   z: depthCoord = null,
//   nested: {foo: bar},
// } = point;
//
// console.log(horizontalCoord, verticalCoord, depthCoord, bar);



//Defaults + Rest + Spread
function add(first, second = 2) {
  return first + second;
}

console.log(add(1));

function sayHi({ name, age }) {
  console.log(name, age);
}

sayHi ({
  name: 'Keith',
  age: '78'
});
