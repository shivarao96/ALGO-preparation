// brute solution
function largestElementInArrayBrute(arr) {
    if(!arr.length) return -1;
    arr = arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

function largestElementInArrayOptimal(arr) {
    if(!arr.length) return -1;
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        largest = Math.max(largest, arr[i]);
    }
    return largest;
}



console.log(largestElementInArrayOptimal([3,1,4,2,5,2,5,8]));