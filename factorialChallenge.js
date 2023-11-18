//write a function that accepts a number and returns a factorial of that number
//inputs that go into the problem: number (positive) vs. floats, negative integers
//expected outputs: factorial of a given number (positive numbers), vs like strings of integers/floats
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//create a total variable that'll store the end product
//num variable that'll I'll pass in and use for finding the factorial

function factorial(num){

    //create a total
    let total = 1;

    //establish an endpoint
    if ( num === 1 ) return 1;

    return num * factorial(num - 1);
    //7 * factorial(6)
        //6 * factorial(5)
            //5 * factorial(4)
                //4 * factorial(3)
                    //3 * factorial(2)
                        //2 * factorial(1)
                            //1
                        // 2 * 1
                    //3 * 2
                //4 * 6
            //5 * 24
        //6 * 120
    //7 * 720
//5040

    // //decrement num and update the total
    // for ( let i = num; num > 1; num-- ) {
    //     total *= num;
    // }

    // console.log(total);
    // return total;
   
}

// factorial(1);
// factorial(2);
// factorial(4);
factorial(7);