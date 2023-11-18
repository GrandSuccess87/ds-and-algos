//write a function that accepts one inputs: a string.  The function should find the longest substring with unique characters
//inputs that go into the problem: string
//expected outputs: the return value integer of total distinct characters.  
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//str variable that'll I'll pass into the function 
//sum variables to keep track of the total

function findLongestSubstring(str) {

    //edge case
    if(str.length === 0) return 0;

    //initialize i
    let i = 0

    //initialize total
    // let total = 0;

    //loop through string
    for ( let j = 1; j < str.length; j++ ) {

        //check if value at index i and j are equal
        //if yes, return false
        if (str[i] !== str[j]) { //i.e. value at i = r, value at j = i
            
            //if no, increment i by 1
            i++; //i.e. value at i = i
            //replace value at i with value at j
            str[i] = str[j]; //i.e i = i? 
        }

        //increment total by 1
        // total++;

    }

    // return total;
    console.log(i+1);
    return i + 1;
}

//sample input 
//findLongestSubstring('')
//0
// findLongestSubstring('rithmschool')
//7
findLongestSubstring('thisisawesome')
//6
