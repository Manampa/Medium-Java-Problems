// Q1 my attempt below wrong
// function falsyOrTruthy(ele1, ele2) {
//     if (ele1 === !!0) || (ele2 === !!0) {
//         return
//     }
//     else {
//         return 
//     }
// }
// console.log(falsyOrTruthy(true, dog))
// Q1 my attempt above wrong

// Q1 correct code below
// function falsyOrTruthy(ele1,ele2) {
    //     return !ele1 ? ele1 : ele2
    // }
    
    // console.log(falsyOrTruthy(true,'dog'))
    // Q1 correct code above



    // Q2 my attempt not exactly correct below
    // function arrLength(arr) {
    //     return arr
    // }
    // console.log(arrLength([1,2,3,4]))
    // Q2 my attempt not exactly correct above

    // Q2 correct code below
    // function arrLength(arr) {
    //     return arr.length
    // }
    // console.log(arrLength([1,2,3,4]))
    // Q2 correct code above 



    // Q3 my attempt correct below
    // function lastEle(arr) {
    //     return arr[arr.length-1];
    // } 
    // console.log(lastEle([3,2,0,6,2]))
    // Q3 my attempt correct above



// Q4 my attempt below Wrong
// function arrSum(arr) {
    //     return arr(arr.length0 + arr.length1 + arr.length2)
    // }
    // console.log(arrSum[2,2,2])
// Q4 my attempt above 7:15

// Q4 correct code below
// function arrSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(arrSum([2,2,2]))
// Q4 correct code above



// Q5 correct code below
// function progressiveSum(num) {
//     let sum = 0
//     for (let i = 1; i <= num; ++i){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(progressiveSum(3));
// Q5 correct code above



// Q6 correct code below
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds/60);
//     let timerSeconds = seconds % 60;
    
//     if (timerMinutes.toString().length ===1) {
//         timerMinutes ='0' + timerMinutes
//     }
//     return timerMinutes + ':' + timerSeconds;
// }
// console.log(calcTime(500))
// Q6 correct code above



// Q7 correct code below
// function getMax(arr) {
//     let max = arr[0];
//     for(let i = 0; i <= arr.length; ++i){
//         if (arr[i] > max) {
//             max = arr[i];
//         } 
//     }
//     return max
// }
// console.log(getMax([1,2,3]))
// Q7 correct code above



// Q8 correct code below INCREMENTING FOR LOOP
// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i ) {
//         reversedString = str[i] + reversedString;
//     }
//     return reversedString
// }
// console.log(reverseString('abc'))
// Q8 correct code above INCREMENTING FOR LOOP



















