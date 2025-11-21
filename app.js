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

    // Q3 my attempt below
    function lastEle(arr) {
        return arr[arr.length-1];
    } 
    console.log(lastEle([3,2,0,6,2]))