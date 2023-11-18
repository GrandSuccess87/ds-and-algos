//returns the digit in num at the given place value
function getDigit(num, i) {
  //Math.pow(10,i) means 10 to the power of i. if i is 2 then 10 to power of 2 which is 100.
  //so divide the number by 100
  //then floor it to remove the decimal 
  //Then divide num by 10 
  //then the remainder is returned
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}

//returns the total number of digits of a number passed in
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//Takes in an array of numbers  
//Returns the number of digits in the largest numbers from the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
//   console.log(maxDigits);
  return maxDigits;
}

//define a fxn that accepts a list of numbers
//figure out how many digits the largest number has mostDigits()
//then figure out how many nums have the same max digits
//loop from k = 0 up to this largest number of digits (outter loop)
//for each iteration:
// - create a bucket for digit ( 0 - 9 ) / create an empty array with 10 subarrays
// - place each number in the corresponding bucket based on it's kth digit (inner loop)
//replace our existing array with values in our buckets, starting w/ 0 and going up to 9
//return list at the end

function radixSort( nums ){

    if ( nums.length === 0 ) return false;

    let mostDigitCount = mostDigits( nums );
    // console.log(mostDigitCount);
    for (let k = 0; k < mostDigitCount; k++ ) {

        let digitBuckets = Array.from({length: 10}, () => []);
        // console.log(digitBuckets);

        for ( let i = 0; i < nums.length; i++ ) {
            let digit = getDigit(nums[i], k);
            // console.log(digit);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        //spread operator allows me to pass in every element (not each subarray) in digitBuckets as an element in the nums array
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }

    return nums;

}

radixSort([23, 567, 89, 12234324, 90])







