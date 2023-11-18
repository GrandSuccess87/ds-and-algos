//create a function called insertion sort that sorts items in an array one at a time
//input: array of numbers (positive)
//output: return sorted array

 //start from the end assuming the array is nearly sorted 
//helpful to think of it as working backwards from the end of the array
//so we're starting from the end or can even start from the middle of the array 
//can start at 0, but it'll just be an extra iteration so we start at the first index

//start by picking the second element in the array, but why? 
//b/c it'll be an extra iteration
//and because j = i - 1, so when arr[i] is at index 0, j will be undefined

//compare the second element to the one before it and swap if necessary

//continue to the next element

//if it is in incorrect order, iterate through the sorted portion (the left side) and place the element in the correct place

// function insertionSort( arr ) {

//     if ( arr.length === 0 ) return false;

//     //swap function
//     const swap = (arr, indx1, indx2) => {
//         [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
//     };

//     let min;

//     for ( let i = 0; i < arr.length; i++ ) {

//         for ( j = i + 1; j < arr.length; j++ ) {

//             min = j;

//             // console.log( i, j, min);

//             if ( arr[min] < arr[i] ) {

//                 //swap
//                 swap( arr, i, min);

//             }
//         }
//     }

//     console.log(arr);
//     return arr;
// }

// function insertionSort(arr) {

//     if (arr.length === 0) return false;

//     //swap function
//     const swap = (arr, indx1, indx2) => {
//         [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
//     };

//     let min;
//     let start = 0;

//     for (let i = 1; i < arr.length; i++) {

//         let currentVal = arr[i];

//         for ( let j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {

//            if( arr[j] > currentVal ) {

//             console.log(i, j, arr[j], currentVal);

//                 // swap( arr, j, currentVal );
//                 arr[j+1] = arr[j];
//                 console.log(arr);

//            }

//            arr[j+1] = currentVal;

//         }   
//     }

//     return arr;
// }

//function to sort items in an array one at a time in ascending numerical order using the insertion sort algorithm
// function insertionSort( arr ) {

//     for ( let i = 1; i < arr.length; i++ ) {

//         //keep track of the value we're looking at 
//         let currentVal = arr[i];

//         for ( let j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {

//             // console.log(i, j, arr[j], currentVal);
//             // console.log("--------------");

//             //no need to do a swap because arr[i] is saved in the variable currentVal
//             //if arr[j] > currentVal, move arr[j] up one so I can compare currentVal to next value at position j
//             arr[j+1] = arr[j];

//         }

//         //not arr[j] because at this point I'm outside the for loop 
//         //found the position where currentValue is greater than arr[j]
        
//         arr[j+1] = currentVal;
//         console.log(arr);

//     }

//     return arr;

// }

//function to sort items in an array one at a time in ascending numerical order using the insertion sort algorithm
//assume array is sorted up until the 4th item in the array, compare the last item to previous item
function insertionSort ( arr ) {
    //begin traversiing at index 1 to avoid an extra iteration
    //how come starting from index 0 here wouldn't throw an undefined reference error for arr[j]?
    for ( var i = 1; i < arr.length; i++ ) {
        var currentVal = arr[i];
        console.log("arr[i]: " + currentVal);
        //create another loop to go backwards
        for ( j = i - 1; j >= 0; j-- ) {
            console.log("arr[j]: " + arr[j]);
        }
    }
    return arr;
}

insertionSort([1, 2, 9, 76, 4]);