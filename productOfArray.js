//write a function that accepts an array of numbers and returns a product of them all
//inputs that go into the problem: array of numbers (only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: product of all numbers in the array (product can be positive only or both positive and negative?), vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Unknown if it should just be positive integers only that the function accepts
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//create a total variable that'll store the product
//arr variable that'll I'll pass in and use for finding the product

//My Iterative Solution 
// function productOfArray(arr){

//     //establish an endpoint
//     if( arr.length === 0 ) return;

//     //create total variable
//     let total = 1;

//     for ( let i = 0; i < arr.length; i++ ) {
//         total *= arr[i]
//     }

//     console.log(total)
//     return total;
    
// }

//My Recursive Solution
function productOfArray(arr) {

    //establish endpoint/base condition
    if ( arr.length === 0 ) return 1;
    
    return arr[0] * productOfArray(arr.slice(1));
        //1 * productOfArray([2, 3, 4]);
            //2 * productOfArray([3, 4]);
                //3 * productOfArray([4]);
                    //4 * productOfArray([]);
                        //1
                    //4 * 1
                //3 * 4 * 1
            //2 * 3 * 4 * 1
        //1 * 2 * 3 * 4 * 1
    //total = 24

}

productOfArray([1, 2, 3, 4]);