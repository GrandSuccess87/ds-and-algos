//implement a helper function responsible for arranging elements in an array on either side of the pivot
//function should designate an element as the pivot
//then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
//the order of elements on either side of the pivot don't matter
//function should do this in place, and not create a new array
//when complete, return the index of the pivot

//for simplicity, pivot will be the first element

//input: array, start index, end index ( default to 0 and array.length - 1 respectively )
//grab the pivot from the start of the array
//store the current pivot index in a variable ( this will keep track of where the pivot should end up/swap )
//if the pivot is greater than the current element, then increment the pivot index var by 1, and swap the 
//swap the starting element(i.e. the pivot) with the pivot index
//return pivot index

function pivot( arr, startIndex = 0, endIndex = arr.length - 1 ) {
   
    //swap function
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };

    let pivot = arr[startIndex];
    let swapIndex = startIndex;

    for ( let i = startIndex+1; i < arr.length; i++ ) {

        if ( pivot > arr[i] ) {

            swapIndex++

            swap( arr, swapIndex, i ); //swap the item at position i with the item at swapIndex

        }

    }

    swap(arr, swapIndex, startIndex ); //final swap of item at index 0 with item at swapIndex
    // console.log(swapIndex);
    return swapIndex;

}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

//quick sort implementation details
//call pivot helper function on the array
//when the function returns the pivot index, then I need to call pivot(), recursively on the subarray
//on the left side and right side of the returned index 

function quickSort( arr, left = 0, right = arr.length - 1 ) { 

    //need to add a break in order to stop the recursive calls so it doesn't return a maximum call stack exceeded error
    //i.e. check if arr.length is <= 1
    //each time the quickSort function is called, left and right are moving closer together.  When they are equal that means there is nothing left to sort.
    if (left < right ) {

    let pivotIndex = pivot( arr, left, right );

    //left side will start at 0 up until pivotIndex-1
    quickSort( arr, left, pivotIndex-1 );

    //right side will start at pivotIndex+1 until the end of the sub array
    quickSort(arr, pivotIndex + 1, right );

    }

    //return sorted array
    console.log(arr);
    return arr;

}

quickSort([4, 6, 9, 1, 2, -3, 5, 3]);