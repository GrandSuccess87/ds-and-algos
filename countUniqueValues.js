//Can I restate the problem in my own words ?
//write a function that accepts a sorted array of integers and counts the unique values in the array

//What are the inputs that go into the problem ? sorted 1-D array

//What are the outputs that should come from the solution to the problem ? an integer or string representation of the total number of unique values

//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes I do

//May not be able to answer this until I start solving the problem

//How should I label the important pieces of data that are part of the problem ? string or number?

//build unique values at the beginning of the array
//if they are the same, advance j by one
//compare values at the 0th and 2nd indicies
//are they different?
//if yes, advance i by one and replace the element at that position with the current value that's at position j
//if no, advance j by one and compare again
//need to add an else if I want to handle the opposite condition.  Else isn't implied

//SOLUTION
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0; //initialize i
  //initialize j inside for loop so that it'll loop through the array
  for (let j = 1; j < arr.length; j++) {
    //check if they aren't equal
    if (arr[i] !== arr[j]) {
      //increment i
      i++;
      //replace value i with value at j
      //both lead to the same result
      arr[i] = arr[j];
      //   arr.splice(i, 1, arr[j]);
      // console.log(arr);
    }
  }
  // console.log(arr);
  console.log(i + 1);
  return i + 1;
}

// countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9]);
countUniqueValues([1, 1, 1, 1, 2]);
//output of the original array [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 6, 7, 8,
//     9
// ]
// the new built array is techincally
//[1, 2, 3, 4, 5, 6, 7, 8, 9]
//so must return i + 1 at the end
// Add a short circuit at the beginning to check if the length of the array is 0 and to return 0 if it is.

// Otherwise it'll return 1

//MY SOLUTION
// function countUniqueValues(arr) {
//     let i = 0;
//     let j = i + 1;

//     while (i < j) {
//         //compare the values at the 0th and 1st indicies
//         console.log("i = " + arr[i] + ", j= " + arr[j]);
//         console.log("i @ " + i);
//         console.log("j @ " + j);
//         if(arr[i] === arr[j]) {
//             console.log("they are equal");
//             j++;
//             console.log("i @ " + i);
//             console.log("j @ " + j);

//         } else {
//             //if they are different
//             console.log("they are different");
//             console.log("i @ " + i);
//             console.log("j @ " + j);
//             console.log("so move i forward...");
//             //advance i by one
//             i++;
//             console.log("i @ " + i);
//             console.log("j @ " + j);
//             //replace the value at index i with the current value that's at position j
//             console.log("replacing value index i with value at index j...")
//             console.log(arr);
//             arr.splice(i, 1, arr[j]);
//             console.log(arr);
//             j++;
//             console.log("i = " + arr[i] + ", j= " + arr[j]);
//             console.log("i @ " + i);
//             console.log("j @ " + j);

//         }

//         if (i === arr.length) {
//             console.log(arr.length);
//             return arr.length + 1;
//         }
//     }

// }
