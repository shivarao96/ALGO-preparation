function hashingSolution(arr, k) {
    const map = {};
    let sum = 0;
    let maxlen = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum == k) {
            maxlen = Math.max(maxlen, i + 1);
        }

        const rem = sum - k;
        if(map[rem] !== undefined) {
            const len = (i - map[rem]);
            maxlen = Math.max(maxlen, len); 
        } 
        if(map[sum] == undefined || map[sum] === null) {
            map[sum] = i;
        }
    }

    return maxlen;
}

function twoPointerApproach(arr, k) {
    let firstPointer = 0;
    let secondPointer = 0;
    let sum = arr[0];
    let maxLen = 0;
    while(secondPointer < arr.length) {
        while(firstPointer <= secondPointer && sum > k) {
            sum -= arr[firstPointer];
            firstPointer++;
        }

        if (sum === k) maxLen = Math.max(maxLen, secondPointer - firstPointer + 1);

        secondPointer++;
        if(firstPointer <= secondPointer) sum += arr[secondPointer];
    }
    return maxLen;
}

console.log(
    twoPointerApproach([1,2,3,4,1,2,3,5,6,7,3,1,1,1], 3)
);