//write a function that accepts a number and returns the sum of all the numbers from 0 to the number passed in
//inputs that go into the problem: number (only positive or positive and negative?) vs. floats, negative integers vs  strings of integers/floats
//expected outputs: sum of all numbers from 0 to the number passed in (sum can be positive only or both positive and negative?), vs  strings of integers/floats
//Can the outputs be determined from the inputs ? Do I have enough information to solve the problem ? Unknown if it should just be positive integers only that the function accepts
//how should I label the important pieces of data? How will I label and store each of the inputs? 
//create a total variable that'll store the sum, may not even be needed
//num variable that'll I'll pass in and use for finding the summation 

function recursiveRange(num) {

    //establish a base condition
    if ( num === 0 ) return 0;

    return num + recursiveRange(num - 1);
    //6 + recursiveRange(5);
        //5 + recursiveRange(4);
            //4 + recursiveRange(3);
                //3 + recursiveRange(2);
                    //2 + recursiveRange(1);
                        //1 + recursiveRange(0);
                            //0
                        //1 + 0
                    //2 + 1 + 0
                //3 + 2 + 1 + 0
            //4 + 3 + 2 + 1 + 0
        //5 + 4 + 3 + 2 + 1 + 0
    //6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
    
} //Call Stack * 7

recursiveRange(6);