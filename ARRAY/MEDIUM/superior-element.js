const superiorElement = function(arr) {
    const maxArray = [-1];
    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] > maxArray[maxArray.length - 1] ) {
            maxArray.push(arr[i])
        };
    }
    maxArray.shift();
    return maxArray;
}

console.log(superiorElement([1, 2, 3, 2]));