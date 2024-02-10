function removeDuplicatesInSortedArr(arr) {
    if(arr.length < 2) return arr;
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[j] !== arr[i]) arr[++i] = arr[j];
    }

    return i + 1;
}