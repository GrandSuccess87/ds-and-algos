//write a function that accepts a sorted array and a value and checks if the value exists in the array
//Input: sorted array of numbers, value will be a number
//output: Index of the value or -1 if never found

//function declaration
function binarySearch(arr, val) {

    //edge case
    if (arr.length === 0 || !val) return false;

    //create two pointers: left to start at the beginning of the arr
    //and a right pointer to start at the end of the array (length -1)

    let left = 0;
    let right = arr.length - 1;

    //pick the middle of the arr 
    //use the average of the positions of the left and right pointer
    // let middle = ((left + right) / 2);
    let middle = Math.floor((left + right ) / 2);

    //while the left pointer is before the right pointer keep looping
    //check if I've found the element 
    do {

        if (val < arr[middle]) right = middle - 1;
        else left = middle + 1;
        
        middle = Math.floor((left + right) / 2);

    } while (left <= right && arr[middle] !== val); 


    //check if the val equals the middle point
    //if true, return the index
    //if false, then reassign the left/right pointer and pick a new middle
    //if val is never round return -1
    return arr[middle] === val ? middle : -1;

}

// function binarySearch(arr, val) {

//     //edge case
//     if (arr.length === 0 || !val) return false;

//     //create two pointers: left to start at the beginning of the arr
//     //and a right pointer to start at the end of the array (length -1)

//     let left = 0;
//     let right = arr.length - 1;

//     //pick the middle of the arr 
//     //use the average of the positions of the left and right pointer
//     // let middle = ((left + right) / 2);
//     let middle = Math.floor((left + right) / 2);

//     //while the left pointer is before the right pointer keep looping
//     //check if I've found the element 
//     while (left <= right && val !== arr[middle]) {

//         if (val < arr[middle]) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }

//         middle = Math.floor((left + right) / 2);

//     };

//     //check if the val equals the middle point
//     //if true, return the index
//     //if false, then reassign the left/right pointer and pick a new middle
//     if (val === arr[middle]) {
//         console.log(middle);
//         return middle;
//     }

//     //if val is never round return -1
//     return -1;

// }

binarySearch([1, 2, 3 ,4, 5], 2); //1
binarySearch([1, 2, 3, 4, 5], 3); //2
binarySearch([1, 2, 3, 4, 5], 5); //4
binarySearch([1, 2, 3, 4, 5], 6); //-1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); //2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95); //16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100); //-1