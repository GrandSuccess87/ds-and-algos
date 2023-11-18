//write a function that accepts a sorted array and a target average and determine if there is a pair of values in the array that equals the targeted average
//inputs that go into the problem: sorted array, target average (Still worth considering if only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: Should return either true or false.  Other challenges, still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//arr variable that'll I'll pass into the function to represent the sorted array
//target average variable for function 
//total variable to store the return value 
//left and right variables for as the two pointers

//time O(N)
//space O(1)

function averagePair(arr, tv) {

    //base condition
    if (arr.length === 0) return false;

    //initialize pointers
    let left = 0;
    let right = arr.length - 1;

    //loop through array
    while (left < right) {

        //add the first two indicies then get the average
        let average = (arr[left] + arr[right]) / 2;

        //check if average === tv, return true
        if (average === tv) return true;

        else if (average < tv) {

            //if average is < tv, left++
            left++;

        } else {

            //if average is > tv, right--;
            right--
        }

    }

    return false;

}

averagePair([-1, 0, 3, 4, 5, 6], 3);