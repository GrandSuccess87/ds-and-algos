//Can I restate the problem in my own words ? Write a function that accepts a variable number of arguments and determines if there are any duplicates passed in among the arguments.  Solve using the frequency counter pattern or multiple pointer pattern
//What are the inputs that go into the problem ?  Will/can they be a string?  How large are the integers, are they decimal or floating points?  n inputs (so O(n) time complexity).  Inputs can be all integers or strings but not a mix of both simultaneously
//What are the outputs that should come from the solution to the problem ? return true/false.  Return all the duplicates in an array or should it exit at the first time a duplicate is found?
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? No, I don't know what the output should look like
//May not be able to answer this until I start solving the problem
//How should I label the important pieces of data that are part of the problem ? string or number? How will I label and store each of the inputs?  Maybe add them to an array so that I can then loop through and compare the value at each index?

//define function 
function areThereDuplicates() {

    //how to grab all the inputs since n will vary on each test run?
    //use the rest parameter/... Rest parameter is a syntax that allows us to represent an indefinite number of arguments as an array.
    //arguments will convert the inputs into an array

    //create an empty object to hold the frequency of each element
    let countObj = {}

    console.log(arguments);

    //loop through the arguments array
    for (let key in arguments) {
        //Store the counts
        countObj[arguments[key]] = (countObj[arguments[key]] || 0 ) + 1
    }
    
    console.log(countObj);
    
    //what am I comparing? nothing, just need to check the count of each value in the object 
    for (let value in countObj) {
        if (countObj[value] > 1) {
            console.log("true");
            return true;

        }
    }

    console.log("false");
    return false;
}

//true 
areThereDuplicates('a', 'b', 'c', 'a');
//true 
areThereDuplicates(1, 2, 3, 2);
//false 
areThereDuplicates(1, 2, 3);
