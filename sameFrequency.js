//Can I restate the problem in my own words ? Write a function that accepts two integers and determine if the parameters have the same frequency of digits
//What are the inputs that go into the problem ? Two integers, positive.  Will/can they be a string?  How large are the integers, are they decimal or floating points?  Will we always be dealing with 2 inputs/what if there's more?  Only 2 for this challenge
//What are the outputs that should come from the solution to the problem ? return true/false.  object containing the frequency of digits for either one or both of the integers
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ?
//May not be able to answer this until I start solving the problem
//How should I label the important pieces of data that are part of the problem ? string or number? num1, num2 as the parameters, frequencyDigits as the object that holds the digit frequencies 

//this solution does not work
function sameFrequency(num1, num2) {
    //check the length of the two integers
    if(num1.length !== num2.length) {
        return false;
    }
    //create empty obj for num1 digit count
    let num1LookUp = {};
    //loop through num1 and add its key/value to the object
    for( let key of num1 ) {
        num1LookUp[key] = (num1LookUp[key] || 0) + 1; //if it doesn't already exist initialize it to 0 then add 1
    }
    
    //loop through the num2 
    for (let value of num2 ) {
        console.log(num1LookUp);
        //check if the key in num2 exists in the obj
        if(!num1LookUp[value]) { 
            //if it doesn't return false
            console.log("value not in obj: " + value)
            return false;
        } 
        //if it does, decrement the count by 1 in the object
        else {
            num1LookUp[value]--;
        }

        // if(num1LookUp[value]) {
        //     num1LookUp[value]--;
        // } else {
        //     return false;
        // }
    }
    console.log(num1LookUp);
    console.log("true");
    return true;
}

//define function
//This solution works, and so does the commented out code below + 81-88 commented out
function sameFrequencyUpdated(input1, input2) {

    //convert integers to a string
    let str1 = input1.toString()
    let str2 = input2.toString()

    //first check that the lengths of each string are equal
    if ( str1.length !== str2.length ) {
        return false;
    }

    //create an empty obj 
    let str1Count = {}
    // let str2Count = {}

    //store the values for each input in respective objects
    for ( let key of str1 ) {
        str1Count[key] = ( str1Count[key] || 0 ) + 1
    }

    // for ( let key of str2 ) {
    //     str2Count[key] = (str2Count[key] || 0) + 1
    // }

    //compare the two objects
    // for ( let value in str1Count ) {
    //     //Do they have the same value frequency?
    //     if( str1Count[value] !== str2Count[value] ) {
    //         //If no, return false
    //         console.log("false");
    //         return false;
    //     }
    // }

    for ( let key of str2 ) {
        if( !str1Count[key] ) {
            console.log("false");
            return false;
        } else {
            str1Count[key]--;
        }
    }

    //If yes, return true
    console.log("true");
    return true;
}

sameFrequencyUpdated(88228, 28288);


//function accepts two integers and determines if they have the same frequency of values
//inputs: positive integers
//output: return either true or false
//I do have enough info to solve the problem
//either one or two empty objects to store the values of the two integers for comparing

function frequencyCounter(num1, num2) {

    if (num1.length !== num2.length) return false;

    let num1Lookup = {};

    //loop through num1 and add each value to num1Lookup
    for (let key of num1) {
        num1Lookup = (num1Lookup[key] || 0) + 1;
    }

    //loop through second num1 and compare the frequency of the values to those in num1Lookup
    for (let val of num2) {

        if (!num1Lookup[val]) {
            return false;

        } else {

            num1Lookup[val]--;

        }
    }

    return true;

}

frequencyCounter(18383, 29392);