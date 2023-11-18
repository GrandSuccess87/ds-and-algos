//create a function called selection sort that will sort values in numeric ascending order
//input: array of numbers 
//output: return the sorted array
//do I have all the components I need?  Yes

function selectionSort(arr) {

    //edge case
    if ( arr.length === 0 ) return false;

    //swap function
    const swap = (arr, indx1, indx2) => {
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
    };

    //this loops over the array once
    for ( let i = 0; i < arr.length; i++ )  {

        //store the first element as the smallest value you've seen so far
        let min = i;

        //this loops over each element in the array
        for ( let j = i + 1; j < arr.length; j++ ) {
            console.log( i, j );
        
            //compare this item to the next one and check if the next item is smaller
            if ( arr[j] < arr[min] ) {

                //if it is smaller, set the index of that item as the new min/smallest value and continue to loop through the array until the end
                min = j;

            }

            //if it's not smaller, continue to loop through the array until the end

        }

        if (arr[i] !== arr[min]) {
            //once the end of the array is reached swap the indicides of the min and the very first index/index 0
            //if the "minimum" is not the value (index) you initially began with
            swap(arr, i, min);
            // console.log(i, min);
            // let temp = arr[i];
            // arr[i] = arr[min];
            // arr[min] = temp;

        }

        //then continue looping through, starting after the smallest value

    }

    //return sorted array
    console.log(arr);
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);