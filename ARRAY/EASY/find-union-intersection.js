// -- when all elements are distinct and sorted
function findUnionOfArray(arrA, arrB) {
    const res = [];
    let aPointer = 0;
    let bPointer = 0;
    // [ 1, 2, 3, 4, 5, 6, 7 ]
    // [ 2, 3, 4, 5, 6, 7, 8, 9]
    while(aPointer < arrA.length && bPointer < arrB.length) {
        if (arrA[aPointer] === arrB[bPointer] ) {
            bPointer++;
        }
        res.push(arrA[aPointer]);
        aPointer++;
    }

    while(bPointer < arrB.length) {
        res.push(arrB[bPointer]);
        bPointer++;
    }

    return res;
}

function findIntersectionOfArray(arrA, arrB) {
    const res = [];
    let aPointer = 0;
    let bPointer = 0;
    // [ 1, 2, 3, 4, 5, 6, 7 ]
    // [ 2, 3, 4, 5, 6, 7, 8, 9]
    while(aPointer < arrA.length && bPointer < arrB.length) {
        if (arrA[aPointer] === arrB[bPointer] ) {
            res.push(arrA[aPointer]);
            bPointer++;
        }
        aPointer++;
    }

    return res;
}


console.log(findIntersectionOfArray(
    [ 1, 2, 3, 4, 5, 6, 7 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9]
));