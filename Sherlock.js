function isValid(s) {
    // Write your code here
    if (s.length === 0) return false;
    let cMap = {};

    for (let c of s) {
        // cMap[c] = (cMap[c] || 0) + 1;
        cMap[c] ? cMap[c]++ : cMap[c] = 1;
    }

    console.log(cMap);
    const objVals = Object.values(cMap);
    console.log(objVals);
    const freqs = new Set(Object.values(cMap))
    console.log(freqs)

    if (freqs.size === 2) {
        const max = Math.max(...freqs)
        const min = Math.min(...freqs)
        console.log('max =', max)
        console.log('min =', min)

        let maxCt = 0
        let minCt = 0
        for (let c in cMap) {
            if (cMap[c] === max) maxCt++
            if (cMap[c] === min) minCt++
        }
        console.log('maxCt =', maxCt)
        console.log('minCt =', minCt)

        if (
            (minCt === 1 && min === 1) ||
            (maxCt === 1 && max === min + 1)
        ) return 'YES'

    }

    return 'NO';

}

// isValid('abcdefghhgfedecba');
isValid('aabbc');



// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'isValid' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */

// function isValid(s) {
//     // Write your code here
//     if (s.length === 0) return false;
//     let cMap = {};

//     for (let c of s) {
//         // cMap[c] = (cMap[c] || 0) + 1;
//         cMap[c] ? cMap[c]++ : cMap[c] = 1;
//     }

//     const freqs = new Set(Object.values(cMap))

//     if (freqs.size === 1) return 'YES';
//     if (freqs.size > 2) return 'NO';
//     if (freqs.size === 2) {

//         const max = Math.max(...freqs)
//         const min = Math.min(...freqs)
//         let maxCt = 0
//         let minCt = 0

//         for (let c in cMap) {
//             if (cMap[c] === max) maxCt++
//             if (cMap[c] === min) minCt++
//         }

//         if (
//             (minCt === 1 && min === 1) ||
//             (maxCt === 1 && max === min + 1)
//         ) return 'YES'

//     }

//     return 'NO';

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = isValid(s);

//     ws.write(result + '\n');

//     ws.end();
// }
