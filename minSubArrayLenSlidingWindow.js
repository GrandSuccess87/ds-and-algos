//write a function that accepts two inputs: array of positive integers and a positive integer.  The function should return the minimal length of a contiguous subarray of which the sum is >= the integer passed into the function.  If there isn't one return 0 instead. 
//Note: the subarray must consist of consecutive elements from the original array.
//inputs that go into the problem: array of integers & a number.  The array does not have to be sorted. Can be unsorted. Will the array consist of positive and negative integers? Positive/Negative floats? Strings of positive/negative floats/integers?  
//expected outputs: array of minimal lenth that consists of the integers >= the integer passed into the fxn.  Other challenges, still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? No
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//arr, num variables that I'll pass into the function 
//sum variables (max and temp) to keep track of the totals 

function minSubArrayLen(arr, num) {

    // if(num > arr.length) return false;
    if (num > arr.length) return 0;
    
    let sum = 0;
    let tempSum = 0;

    //loop through num and store the sum
    for(let i = 0; i < num.length; i++) {
        sum += arr[i];
    }

    //update tempSum
    sum = tempSum;

    //loop through the array beginning at num
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
    }

    //compare tempSum to sum
    if(tempSum > sum) {
        return tempSum;
    } else {
        return sum;
    };
}