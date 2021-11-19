// (function (window) {
//   var yaakovGreeter = {};
//   yaakovGreeter.name = "Yaakov";
//   var greeting = "Hello ";
//   yaakovGreeter.sayHello = function () {
//     console.log(greeting + yaakovGreeter.name);
//   }

//   window.yaakovGreeter = yaakovGreeter;

// })(window);


// // Closures
// function makeMultiplier (multiplier) {
//   // var multiplier = 2;
//   function b() {
//     console.log("Multiplier is: " + multiplier);
//   }
//   b();


//   return (
//       function (x) {
//         return multiplier * x;
//       }

//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10)); // its own exec env


// let firstName = "Daniel";
// let lastName = "Morrison";
// let fullName = "firstName" + "" + "lastName";
// console.log(fullName);

// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);
// // Object literals and "this"
// var literalCircle = {
//   radius: 10,

//   getArea: function () {
//     console.log(this);
//     return Math.PI * Math.pow(this.radius,2);
// 	}
// }
// console.log(literalCircle.getArea ());



//     var increaseRadius = function () {
//       self.radius = 20;
//     };
//     increaseRadius();
//     console.log(this.radius);

//     return Math.PI * Math.pow(this.radius, 2);
//   }
// };

// console.log(literalCircle.getArea());














// // Function constructors
// function Circle (radius) {
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};

// var myCircle = new Circle(10);
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myCircle);



// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);


















// // Functions are First-Class Data Types
// // Functions ARE objects
// function multiply(x, y) {
//   return x * y;
// }

// multiply.version = "v.1.0.0";



// // // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// // // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);

// function makeMultiplier(multiplier) {
//   var myFunFunc = function (x) {
//     return multiplier * x;
//   };
  
//   return myFunFunc;
// }

// var operation = makeMultiplier(10);
// console.log(operation(10));

// Copy by Reference vs by Value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);



// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);






// // // Pass by reference vs by value
// function changePrimitive(primValue) {
//   console.log("in changePrimitive...");
//   console.log("before:");
//   console.log(primValue);
  
//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);



// function changeObject(objValue) {
//   console.log("in changeObject...");
//   console.log("before:");
//   console.log(objValue);
  
//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);
// }

// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);










