//write a function that accepts two inputs: array of integers and a number.  
//The function should return the minimum length of contigious integers who's sum is >= to the number passed in
//otherwise return 0
//Note: the subarray must consist of consecutive elements from the original array.
//inputs that go into the problem: array of positive integers & a positive number.  Will the array consist of positive and negative integers? Positive/Negative floats? Strings of positive/negative floats/integers?  
//expected outputs: the max sum return value.  Other challenges, still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? No
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//arr, num variables that I'll pass into the function 
//sum variables (max and temp) to keep track of the totals 

function minSubarrayLen(arr, tempSum ) {

    //edge case
    if (arr.length === 0 ) return 0;

    //initialize max sum
    //assign to inifinity to capture sum of negative integers??? This doesn't work when assigned to inifinity
    let maxSum = 0;
    let tempSum = 0;

    //loop through num
    for (let i = 0; i < num; i++) {

        //update maxSum to hold the total of the first two elements in the array
        //100 + 200
        maxSum += arr[i];

    }

    //update tempSum
    tempSum = maxSum;

    //loop through arr
    for (let i = 0; i < arr.length; i++) { //loop starts at 

        //store the sum in tempSum
        tempSum = tempSum - arr[i - 0] + arr[i]; //add  and subtract 

        //compare tempSum vs maxSum using Math.max()
        maxSum = Math.max(maxSum, tempSum)

    }

    return maxSum;

}