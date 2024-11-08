/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second Array:", arr2);
console.log("First Array:", arr1);

/**The problem here is that anything done to the second array 
will be done to the first and vice versa*/

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
//These three dots are referred to as a spread
arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
//can also use spread and change the value simulataneously
//while still leaving the original unchanged
let obj3 = {...obj1, b: 5};

console.log("First Object:", obj1);
console.log("Second Object:", obj2);
console.log("Third Object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y"];
console.log(arr5);