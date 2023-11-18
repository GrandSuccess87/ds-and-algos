//write a function that accepts a base and an exponent and returns the power of the base to the exponent
//inputs that go into the problem: positive numbers only! (Still worth considering if only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: positive number only! Still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//base variable that'll I'll pass into the function
//exponent variable that I'll use to kick off the Fibonacci sequence
//total variable to store the return value - represents the given base taken to the power of the given exponent.

//helpful resource: https://www.tutorialsmade.com/javascript-to-find-power-of-a-number-without-using-pow-function/

// function power (base, exponent) {

//     //create base condition/endpoint
//     if ( exponent === 0 ) return 1;

//     //initialize total
//     let total = 1;

//     //initialize iteration 
//     let i;

//     //(iterative solution)
//     //loop exponent times
//     for ( let i = 0; i < exponent; i++ ) {

//         //multiply total by the base value
//         total = total * base;

//     }

//     return total;

//     //OR (recursively)
//     if (exponent === 0 ) return 1;
//     let total =  base * power(base, exponent - 1);
//     console.log(total);
//     return total;
//         //5 * power(5, 1)
//             //5 * power(5, 0)
//                 //5 * 1
//             //5 * 1
//         //5 * 5 * 1
//     //return 25 
// }

function power(b, e) {

    if (e === 0) return 1;
    return b * power(b, e - 1);
    //let p = b * power(b, e - 1);
    // console.log(p);
    // return p;

}

power(5, 2);