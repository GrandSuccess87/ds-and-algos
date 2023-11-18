//write a function that accepts two inputs: array of integers and a number.  The function should find the maximum sum of a subarray with the length of the integers equaling the number passed into the function.
//Note: the subarray must consist of consecutive elements from the original array.
//inputs that go into the problem: array of integers & a number.  The array does not have to be sorted. Can be unsorted. Will the array consist of positive and negative integers? Positive/Negative floats? Strings of positive/negative floats/integers?  
//expected outputs: the max sum return value.  Other challenges, still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? No
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//arr, num variables that'll I'll pass into the function 
//sum variables (max and temp) to keep track of the totals 

//They actually gave sample inputs which indicate that the array can contain positive and negative integers
//maxSubArraySum([100, 200, 300, 400], 2) 700
//On a high level this function is subtracting an array value and adding an array value in and that's the sliding window

function maxSubArraySum( arr, num ) {

    //edge case
    if ( num > arr.length ) return null;

    //initialize max sum
    //assign to inifinity to capture sum of negative integers??? This doesn't work when assigned to inifinity
    let maxSum = 0; 
    let tempSum = 0;

    //loop through num
    for ( let i = 0; i < num; i++ ) {

        //update maxSum to hold the total of the first two elements in the array
        //100 + 200
        maxSum += arr[i];

    }

    //update tempSum
    tempSum = maxSum;

    //loop through arr
    for ( let i = num; i < arr.length; i++ ) { //loop starts at 300

        //store the sum in tempSum
        tempSum = tempSum - arr[i-num] + arr[i]; //add 300 and subtract 100

        //compare tempSum vs maxSum using Math.max()
        maxSum = Math.max(maxSum, tempSum)

    }

    return maxSum;

}

maxSubArraySum([100, 200, 300, 400], 2); 
//700