//write a function that accepts two strings and checks whether the characters in the first string form a subsequence of the characters in the second string
//the function should check whether the characters in the first string appear somewhere in the second string without a change in order
//inputs that go into the problem: two strings (Still worth considering if only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: Should return either true or false.  Other challenges, still worth considering if number can be positive only or both positive and negative?, vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//string1, string2 variables that'll I'll pass into the function 
//two objects to store the char count in each string

function isSubsequence (pattern, string) {

    var i = 0;
    var j = 0;

    if (!pattern) return true;

    while (j < string.length) {
        if (string[j] === pattern[i]) i++;
        if (i === pattern.length) return true;
        j++;
    }
    
    return false;

    //base condition
    // if( pattern.length > string.length ) return false;

    //initialize pattern length
    // let length = pattern.length;

    //initialize objects
    // let lookupChar1 = {};
    // let lookupChar2 = {};

    //loop through inputs and store the char frequency in the respective objects
    // for ( key of string1 ) {
    //     //initialize to 0 if it doesn't exist
    //     lookupChar1 = ( lookupChar1[key] || 0 ) + 1;

    // }

    // for ( key of string2 ) {
    //     //initialize to 0 if it doesn't exist
    //     lookupChar2 = (lookupChar2[key] || 0) + 1;

    // }

    // for (i in pattern.length - 1) {

    //     //initialize two adjacent characters in the pattern
    //     let x = pattern[i]
    //     let y = pattern[i + 1]

    //     let first = string.indexOf(x);
    //     let last = string.lastIndexOf(y);

    //     if ( first === -1 || last === -1 || last > first ) {
    //         return false;
    //     } 

    //     return true;

    // }

    //compare objects to see if char exists 
    // for ( val in lookupChar1 ) {

    //     if( lookupChar1[val] !== lookupChar2[val] ) {
    //         return false;
    //     }
    // }

    // return true;
}