//write a function that compares one long string and one short string and returns the number of times the characters sequentially match in a row
//loop over longer string
//then loop over the shorter string
//check if the characters match
//if false, break out the loop return counter
//if true, continue to loop until the end of the string is reached, increment counter by 1 and return the counter

function naiveLinearSearch(longString, shortString) {
    //initialize vars
    let counter = 0;

    //loop through long string
    //loop through short string
    //start at position 0 of strings
    //check if the char is equal
    //if equal, continue to loop through short string until end
    //increment counter by 1
    //if not equal, return counter
    for ( let i = 0; i < longString.length; i++) {
        // console.log(i);
        for ( let j = 0; j < shortString.length; j++) {
            // console.log(longString[i+j], shortString[j]);
            if (longString[i + j] !== shortString[j]) break;
                // console.log("counter: " + counter);
                // return counter;
                //break anytime there isn't a match so that j resets to 0 for the next comparison
            if (j === shortString.length - 1) counter++;
        }
    }

    console.log("counter: " + counter);
    return counter;
}

naiveLinearSearch("lorie loled", "pop");