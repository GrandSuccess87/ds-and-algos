//write a function called serach that accepts 2 parameters: sorted array of integers, value 
//and returns the index that value is found
//Input i.e search([1,2,3,4,5,6], 5)
//Output will be an integer i.e. 4 from the example above, 5 occurs at index 4
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? 
//what if the value isn't in the array i.e. search([1,2,3,4,5,6], 11) return -1
//what if the array is empty?  return null? return -1
//what if there is no value passed in? return null? return -1
//how should I label the important pieces of data? return the index when the value is found

//LINEAR SEARCH, TIME COMPLEXITY O(N), NAIVE APPROACH
function search (arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            console.log(i);
            return i;
        }
    }
    console.log(-1);
    return -1;
}

search([1,2,3,4,8,10,14], 11);