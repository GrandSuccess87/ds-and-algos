// Recursive Version
function countDown(num){
    if(num <= 0) { //base case/endpoint to prevent going into the negative integers
        console.log("All done!");
        return; //explicit return to stop function. Otherwise we'd continue to invoke the function with negative numbers
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

