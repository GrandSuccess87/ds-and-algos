function collectOddValues(arr) { //[1,2,3,4,5]
    let newArr = []; //as intended by design - this will be defined each time and therefore reset to an empty array each time the function is called recursively on line 12
    
    if(arr.length === 0) { //check if input is empty
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){ //check if first number in the array is odd or not cleanly divisible by 2
        newArr.push(arr[0]); // if odd, push to newArr other skip this step and go onto line 12 
        //i.e. first iteration [1]
        
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    //newArr = [1].concat(collectOddValues([2, 3, 4, 5]));
        //newArr = [].concat(collectOddValues([3, 4, 5]));
             //newArr = [3].concat(collectOddValues([4, 5]));
                //newArr = [].concat(collectOddValues([5]));
                    //newArr = [5].concat(collectOddValues([]));
                        //newArr = []
                    //newArr = [5]
                //newArr = [5]
            //newArr = [3, 5]
        //newArr = [3, 5]
    //newArr = [1, 3, 5]
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
                                                                
                                                                             
                            
            