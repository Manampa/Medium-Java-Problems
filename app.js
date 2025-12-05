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
        
// Q8 correct code below DECREMENTING FOR LOOP28:00
// function reverseString(str) {
    //     let reversedString = '';
    //     for (let i = str.length -1; i >= 0; --i) {
        //         reversedString = reversedString + str[i];
        //     }
        //     return reversedString;
        // }
        // console.log(reverseString('abc'))
        // Q8 correct code above DECREMENTING FOR LOOP28:00
        
// Q8 correct code below .reverse
// function reverseString(str) {
//     return str.split('').reverse().join('') 
// }
// console.log(reverseString('abc'))
// Q8 correct code above .reverse33:30



// Q9 correct code below ----- solution1 for loop
// function convertToZeros(arr){
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] = 0
//     }
//     return arr; 
// }   
// console.log(convertToZeros([1,2,3,4,5]))     
// Q9 correct code above ----- solution1 for loop

// Q9 correct code below ----- solution2 array 'fill'
// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }
// console.log(convertToZeros([1,2,3,4,5]))
// Q9 correct code above ----- solution2 array 'fill'

// Q9 correct code below ----- solution3 array .map
// function convertToZeros(arr) {
//     return arr.map(elem => 0)
// }
// console.log(convertToZeros([1,2,3,4,5,]))
// Q9 correct code above ----- solution3 array .map



// Q10 solution 1 for loop below
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'apple'){
            noApples.push(arr[i])
        }
    }
    return noApples;

}
console.log(removeApples(['banana', 'oranges', 'apple']))
// Q10 solution 1 for loop above














