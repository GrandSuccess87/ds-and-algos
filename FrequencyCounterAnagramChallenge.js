//Can I restate the problem in my own words ?
//write a function that'll take in two lower case strings and determine if they're anagrams of one another i.e. if they have the same character and character count

//What are the inputs that go into the problem ? 2 lower case strings.  No punctuation marks, spaces

//What are the outputs that should come from the solution to the problem ? function should return true or false

//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Yes I do

//May not be able to answer this until I start solving the problem

//How should I label the important pieces of data that are part of the problem ? Objects to hold the data i.e character frequency of the two strings

//define function 
function validAnagramSolution(str1, str2) {

    //check if the length of the two strings equal one another
    if (str1.length !== str2.length) {
        console.log("unequal length");
        return false
    }

    //create one empty object to store the character count of the first string
    let str1CharCount = {}

    //loop over the first string to store each letter and add it to the object
    for (let key of str1) {
        console.log(str1);
        console.log(key);
        //add the character from the string to the object and assign its value
        str1CharCount[key] = (str1CharCount[key] || 0) + 1
        console.log(str1CharCount[key]);
        console.log(str1CharCount);
    }
    

    //loop over the second string to store each letter and add it to the object
    for (let val of str2) {
        //if key exists and its frequency/count > 0 then truthy
        if (!str1CharCount[val]) { //if the count is 0 then it is falsy
            console.log("non-matching key / value frequency");
            return false;
        } else { 
            str1CharCount[val] -= 1;
        }
        console.log(str1CharCount);
    }
    
    console.log("true");
    return true;

}

validAnagramSolution("anagram", "nagaram");