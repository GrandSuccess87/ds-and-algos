function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    console.log("max sum: " + maxSum);
  }

  tempSum = maxSum;
  console.log("temp sum: " + tempSum);

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log("i @ position " + i);
    console.log("value @ position " + i + " is " + arr[i]);
    console.log(i - num);
    console.log(arr[i - num]);
    console.log("temp sum: " + tempSum);
    console.log("max sum: " + maxSum);
    maxSum = Math.max(maxSum, tempSum);
    console.log("max sum: " + maxSum);
    console.log("------");
  }
  console.log("max sum: " + maxSum)
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
