//write a function that accepts a number and returns the nth number in the Fibonacci sequence
//inputs that go into the problem: (positive) number (only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: nth (positive) number in Fibonacci sequence (nth number can be positive only or both positive and negative?), vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Unknown if it should just be positive integers only that the function accepts
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//num variable that'll I'll pass into the function
//num2 and num3 variables that I'll use to kick off the Fibonacci sequence
//num4 variable that'll I'll use to store the nth number in the sequence
//total variable to store the sum of num2 and num3

//1 + 1 + 2 + 3 + 5 + 8
//1   2   3   4   5   6

//sample inputs
// fib(4) // 3 => 1 + 1 + 2 + 3
// fib(10) // 55 => 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
    if (n <= 2) return 1; 
    return fib(n - 1) + fib(n - 2);
}

// function fib(num) {

//     //create a base condition
//     if ( num === 0 ) return;

//     //initialize num2 and num3 accordingly 
//     let num2 = 1;
//     let num3 = 3;

//     //initialize total
//     let total = 0;

//     //add num2 and num3
//     // total = num2 + num3;

//     //initialize an empty arary
//     let arr = [];

//     //push num2 and num3 into an array
//     arr.push(num2, num3);
//     console.log(arr); 

//     //add the sums of the first two indicies
//     for ( let i = 0; i < arr.length; i++ ) {
//         for ( let j = 1; j < arr.length; j++ ) {
//             total = arr[i] + arr[j];
//         }
//     }

//     arr.push(total);   

//     console.log(arr);
//     console.log(arr[num]);
//     // return arr[num];
    
// }

// fib(3);

//first iteration
//value of i at position 0 is 1
//value of j at position 1 is 1
//total  is 2
//add 2 to the array

//second iteration
//value of i at position 1 is 1
//value of j at position 2 is 2
//total  is 3
//add 3 to the array

//third iteration
//value of i at position 2 is 2
//value of j at position 3 is 3
//total  is 5
//add 5 to the array

//fourth iteration
//value of i at position 3 is 3
//value of j at position 4 is 5
//total  is 8
//add 8 to the array