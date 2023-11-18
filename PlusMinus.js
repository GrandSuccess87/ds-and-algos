const arr = [2, 0, -1, -6];

function findEvenNums(arr) {
  let evenNums = 0;
  let oddNums = 0;
  let zeros = 0;
  const total = arr.length;

  for (let i = 0; i < total; i++) {
    Math.sign(arr[i]) === 1
      ? evenNums++
      : Math.sign(arr[i]) === -1
      ? oddNums++
      : zeros++;
  }
  evenNums = evenNums / total;
  oddNums = oddNums / total;
  zeros = zeros / total;

  console.log(evenNums.toFixed(6));
  console.log(oddNums.toFixed(6));
  console.log(oddNums.toFixed(6));
}

findEvenNums(arr);
