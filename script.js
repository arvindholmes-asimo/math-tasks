//string methods
//Number.EPSILON umber.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
//`.isInteger()` checks whether the given value is an integer and returns a boolean value
// let x = 10
// let num = Number.isInteger(x)
// console.log(num)

// let x = 10.99
// let num = Number.isInteger(x)
// console.log(num)


// toLocaleString() method uses a local language format to convert a number and returns it as a string.
//  It takes two arguments, locales and options , which defines the language of which conversion you want to use, and the behavior of the function.

// valueOf() method is used to return the primitive value of the Number object you’re calling it on

//.toPrecision() returns the numeric value with a specific length. It takes an argument that signifies the length. If given without a specific length, the method returns the number as it is.

// .toFixed(digits) method formats the number with 2 number of digits after the decimal point. 
// If you call the .toFixed() method without a parameter, it returns a rounded-up integer.
// var num = 4.56789;
// console.log(num.toFixed())              //output = 5

// the .toFixed(digits) method formats the number with 2 number of digits after the decimal point
// var num = 4.56789;
     
// console.log(num.toFixed(2))



// ex  1  Number() method converts a string into a number

//  ex 1b r
//  let x = true ;
//  let num = Number (x)
//  console.log(num)            //output 1
//  console.log(num * 9)        //output 9


// //  ex 1c Number(value) method is used to convert string x to an integer and perform operations on the number value. Setting x to true returns 1 and false returns 0.
// let x= false;
// let num = Number(x)

// console.log(num)   //output = 0
// console.log(num+9)  //output = 9

// ex2a  parseInt() formats a string into an integer.
// let x =99991.55
// let num=parseInt(x)
// console.log(num)

// // ex2b parseInt(value) method takes string x , decimal number and returns  only the integer
// let x = '7 days'
// let num = parseInt(x)
// console.log(num) 
// // output 7


// // Example 2c
// let x = 'day 7'
// let num = parseInt(x)
// console.log(num)
// //Output:NaN
//ex 2d
// parseFloat() method parses a string value and returns the number with its decimal value.
// let x = '10.99'
// let num = parseFloat(x)
// console.log(num)                 

//ex 3a .toString() converts a numeric value into a string
// let x = 10 ;
// let num = x.toString();
// console.log(num)     ;   //output '10' or 10

//ex 3b Adding the number `2` as a parameter to .toString() method, returns the binary value of the number
// let x = 10
// let num = x.toString(2)
// console.log(num) //output 1010

//ex 4(a) toExponential()  .toExponential() converts a number into a string and returns it in an exponential format
// let x = 456.789
// let num = x.toExponential()
// console.log(num) // output 4.56789e+2

//ex 4(b) parameter with 2 digits(1 digit with 1 decimal), returns the value with two decimal digits.
// let x = 456.789
// let num = x.toExponential(1)
// console.log(num)   // Output: 4.57e+2

//ex 5a `.toFixed() `method rounds up a number to the nearest highest or lowest fixed-point notation
// var num = 4.56789;
// console.log(num.toFixed())        // Output : 5

//ex 5b  .toFixed(digits) method formats the number with 2 number of digits after the decimal point 
// var num = 4.56789; 
// console.log(num.toFixed(2))            // Output : 4.57

//ex 6a .toPrecision() returns the numeric value with a specific length
// var num = 456.789;
// console.log(num.toPrecision())      // Output : 456.789
// ex 6b to specific length 
// var num = 456.789;   
// console.log(num.toPrecision(2))     // Output : 4.6


//https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript

// let mystring = "lower case string";
// mystring.toUpperCase();
// console.log(mystring);
// // 'LOWER CASE STRING'
// console.log(mystring.length)
// // 17
`primitive datatypes `

// let isapproved =false 
// console.log(typeof(isapproved))
// console.log(typeof(isapproved))

// console.log(typeof("hello"))
// console.log(typeof('hello'))
// console.log(typeof(`hello`))

// let age;
// console.log(age)            //undefined

// var x = new Boolean(false);
// if (x);


// addition
// // var sum = 33 + 66;
// console.log(sum)      output = 99

// substraction
// var difference = 56-34
// console.log(difference)    output = 22

// // multiply
// var product =5 * 5 
// console.log(product)   output = 25

// // divide 
// var qoutient = 98/2
// console.log (qoutient)
// //  output = 49


var myVar = 77;
myVar = myVar + 93;
