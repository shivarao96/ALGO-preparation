function secondLargestElementInArr(arr) {
    if(!arr.length) return [-1,-1];
    const largestValHolder = {
        first: arr[0],
        second: -1
    };

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largestValHolder.first) {
            largestValHolder.second = largestValHolder.first;
            largestValHolder.first = arr[i];
        } else if(arr[i] > largestValHolder.second && arr[i] !== largestValHolder.first) {
            largestValHolder.second = arr[i];
        }
    }

    return [
        largestValHolder.first,
        largestValHolder.second
    ];
}

