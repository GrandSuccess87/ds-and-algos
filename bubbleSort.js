//create a function called bubble sort that will sort elements in an array in ascending numeric order
//array of numbers
//start looping with a variable called i at the end of the array towards the beginning
//start an inner loop with a variable called j from the beginning until i - 1
//if arr[j] is greater than arr[j+1], swap the two values
//return sorted array

// function bubbleSort ( arr ) {
//     //optimized
//     for ( let i = arr.length; i >= 0; i-- ) {
//         //loop every item in the array.
//         //this will only sort for 1 iteration
//         // for ( let i = 0; i < arr.length; i++ ) {
//             //need create another for loop 
//             //so that it'll repeat the process for every item
//             // for ( let j = 0; j < arr.length; j++ ) {
//             //optimized
//             for (let j = 0; j < i - 1; j++) {
//                 console.log(i, arr, arr[j], arr[j+1]);
//                 if ( arr[j] > arr[j+1]) {
//                     //swaaapp
//                     let temp = arr[j];
//                     // console.log(temp);
//                     // console.log(arr[j + 1])
//                     arr[j] = arr[j+1];
//                     // console.log(arr[j])
//                     // console.log(arr[j + 1])
//                     // console.log(arr);
//                     arr[j+1] = temp;  
//                     // console.log(arr[j+1]) 
//                     // console.log(arr); 
//                 }
//             }
//         }

//         console.log("ONE PASS COMPLETE");

//     // }
//     console.log(arr);
//     return arr;

// }

//ES2015
function bubbleSort(arr) {
    let noSwaps;
    const swap = ( arr, indx1, indx2 ) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };
    //optimized
    for (let i = arr.length; i >= 0; i--) {
        //loop every item in the array.
        //this will only sort for 1 iteration
        //need create another for loop 
        //so that it'll repeat the process for every item
        //optimized
       noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //swaaapp
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }

        //short circuit the code to break out of the loop
        //to prevent it from still looping after the array has been sorted
        if (noSwaps) break;
    }

    console.log("ONE PASS COMPLETE");
    console.log(arr);
    return arr;

}

bubbleSort([8,1,2,3,4,5,6,7]);