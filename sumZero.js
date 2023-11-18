//Can I restate the problem in my own words ?
//write a function that accepts a sorted array of intergers then finds and returns an array of the first pair of integers whos sum is zero

//What are the inputs that go into the problem ? sorted 1-D array 

//What are the outputs that should come from the solution to the problem ? an array that contains a pair of integers

//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes I do

//May not be able to answer this until I start solving the problem

//How should I label the important pieces of data that are part of the problem ? an array for the final output, variables for both pointers

//naive solution, less efficient, time complexity O(n^2), space complexity O(1)
//define function 
// function sumZero(arr) {
    //start at beginning of array for pointer 1 and loop through entire array for a 4
    //on the third iteration i will be at the second index, -2 in search of a 2
    //16 operations performed to find a pair. 16 * 2 = 32 operations total - O(n^2)
    // for (let i = 0; i < arr.length; i++) {
        //pointer 2 will start at -3 and loop through the entire array in search of a 3
        // for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 console.log(arr[i], arr[j]);
//                 return [arr[i], arr[j]];
//             }
//             console.log("no match");
//         }
//     }
// }

// sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

//Intermediate Solution 
//Multiple Pointers Pattern
//Instead of looping through the entire array, I can have pointer 1 start at the beginning of the array
//and pointer 2 will start at the end the array
//more efficient, time complexity O(n), space complexity O(1)
//while left < right is the fail safe to prevent a false positive
//I need to have sum inside the while loop (b/c I need to check the sum before applying the checks)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            console.log(arr[left] + "," + arr[right] + " = " + sum);
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}


// sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])