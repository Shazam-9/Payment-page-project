// const userName = 'Eduardo';
// alert('Hello, ' + userName);


// let x =1;
// x = -x;
// alert(x);//Unary with one operand and binary with two numbers

// alert(15%4);
// alert(10%8); //remainder examples

// alert(2**2);// 2x2 exponentiation examples
// alert(3**3);// 3x3x3
// alert( 4** (1/2)); // (power of half is the same a square root)
// alert(8 ** (1/3));// (power of 1/3 is the same as a cubic root) 
// alert(27 ** (1/3));// (power of 1/3 is the same as a cubic root)
// alert ( 15 ** (1/3));

// let ex =3;
// let ex2 =2;
// let ex3 = "3";
// let ex4 ="2";
// alert(ex + ex2);
// alert(ex + ex3);
// alert(ex3 + ex4);
// alert (y = ex + ex2);

// alert(5 + 7 * 2 + "10" / 2);    // 5 + (7 * 2) + "10" / 2
// alert("10" / 2);  // only + is allowed in string concatenation 

// alert("10" * 3)  
// alert(+""); // 0
// alert(+true); // 1
// alert(+false); // 0
// alert(+null); // 0
// alert(+undefined); // NaN
// alert(+Infinity); // Infinity
// alert(+"Infinity"); // Infinity
// alert(+"NaN"); 

// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// // the longer variant
// // alert( Number(apples) + Number(oranges) ); // 5

// console.log((3 + 2) * 4);

// //Module operation

// console.log(22 % 7);
// console.log(23 % 7);
// console.log(24 % 7);
// console.log(25 % 7);
// // what modulo does is it gives the remainder of the division of the two numbers
// // Modulo with small number first will have an answer that is the same as the smaller number

// 7 % 10; // 7 etc

// //if a value doesn't have quotation marks it will be converted to a string

// //Not operator (!) is used to invert the value of a boolean expression
// //And operator returns true if all the operands are true (and)
// //Or operator returns true if at least one of the operands is true (||)

// console.log(!!true); // true
// console.log(!!false); // false
// console.log(!!null); // false
// console.log(!!0); // false
// console.log(!!-0); // true
// console.log(!!NaN); // false
// console.log(!!Infinity); // true
// console.log(!!(1/0)); // true
// console.log(!!(1/0)); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!null); // true
// console.log(!0); // true
// console.log(!-0); // false
// console.log(!NaN); // true
// console.log(!Infinity); // false
// console.log(!(1/0)); // false
//  // true
// // false

// console.log((!false && true)) || !(false && true); // 

// //short circuit evaluation is when the evaluation stops when the first operand is false an example of short circuit evaluation is the && operator
// //if the first operand is false the second operand is not evaluated
// //if the first operand is true the second operand is evaluated
// // to make any expression a note, highlight and press Ctrl+/
// // DeMorgan's law is the opposite of the truth table
// // !(a && b) => !a || !b
// // think of = as an assignment operator not equal sign
// // == is a comparison operator
// // === is a strict comparison operator
// // != is a comparison operator
// // !== is a strict comparison operator
// // < is a comparison operator
// // > is a comparison operator
// // <= is a comparison operator
// // >= is a comparison operator
// // && is a logical operator
// // || is a logical operator
// // ! is a logical operator
// // && is a short circuit operator
// // || is a short circuit operator
// // ! is a short circuit operator
// // && is a short circuit operator

// // functions are a set of statements that perform a task
// // functions are used to perform a task
// // return is used to return a value from a function
// // arguments are the values that are passed to a function
// // parameters are the variables that are used to store the arguments
// // parameters are used to store the arguments
// // arguments are used to pass the values to the function
// // console.log is a function
// //funtion sum(a, b) { return a + b; }
// //console.log(sum(1, 2)); // 3
// //return a + b

// //loops are used to repeat a task
// //for loops are used to repeat a task
// //loops are useful for iterating over a collection of items


// // conditional chaining is when you use multiple conditional operators to make a single expression
// // else if is used to make a conditional expression
// // if is used to make a conditional expression
// //you can chain infinite number of conditional expressions

// // function sayHello(name) {
// //     return "Hello " + name;
// // }

// // sayHello("Eduardo");
// //break and continue are used to stop the execution of a loop

// // function addThreeNumbers(#1, #2, #3) {
// //     return #1 + #2 + #3;
// // }
// // addThreeNumbers(1, 2, 3); // if an extra argument is passed to the function it will be ignored

// // function goodbye(name){
  
// //     return 'Bye ' + name;
      
// //     }
    
// //     console.log(goodbye("Daniel")); // => "Bye Daniel."
// //     console.log(goodbye("Mark")); // => "Bye Mark."
// //     console.log(goodbye("Beyonce")); // => "Bye Beyonce."

// //toLowerCase() and toUpperCase() are used to convert a string to lowercaseor uppercase

// //empty parentheses are used to call a function

// //echo is a function that returns the string it was passed
// //console.log is a function that prints the string it was passed to the console
// //to use echo and console.log you can use the + operator

// //you can store a function in a variable and then call the function by using the variable name



//Immutable vs Mutable Data
// Immutable data is data that cannot be changed.
// Mutable data is data that can be changed.
//strings, booleans and numbers are immutable
// arrays and objects are mutable

// let replaceFirst = function(array, newValue){
//     array[0] = newValue;
//     return array;
// }

// let letters = ["a", "b"];

// console.log(letters);
// replaceFirst(letters, x);
// console.log(letters);

// Common Array Methods
//
//Immutable vs Mutable Data
// Immutable data is data that cannot be changed.
// Mutable data is data that can be changed.
//strings, booleans and numbers are immutable
// arrays and objects are mutable

// let replaceFirst = function(array, newValue){
//     array[0] = newValue;
//     return array;
// }

// let letters = ["a", "b"];

// console.log(letters);
// replaceFirst(letters, x);
// console.log(letters);

// Common Array Methods
// Array push, pop, shift, unshift, splice, slice, concat, join, reverse, sort
//push adds to the end of the array
//if you want to call multiple functions, you need to put them in parentheses
//pop removes the last element of the array
//shift removes the first element of the array
//unshift adds to the beginning of the array
//splice can remove and add elements to the array
//slice can copy elements of an array
//concat can combine two arrays
//join can join elements of an array into a string
//reverse reverses the order of the elements of an array
//sort can sort the elements of an array


// Helper functions!

//ATM
//Deposit

// is it considered best practice to handle all conditionals with an else statement instead of only using an if statement for some or a stylistic choice.
