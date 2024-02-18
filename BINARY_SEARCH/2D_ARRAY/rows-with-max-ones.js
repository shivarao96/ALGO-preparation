const lowerBound = function(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while(low <= high) {
        const mid = Math.floor((low + high)/2);
        if (arr[mid] >= k) {
            high = mid - 1;
            ans = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

const rowsWithMaxOnes = function(arr) {
    const n = arr.length;
    const m = arr[0].length;
    let ans = -1;
    let ansIndex = -1;
    for (let i = 0; i < n; i++) {
        const count_ones  = lowerBound(arr[i], 1);
        const len = m - count_ones;
        if (len > ans) {
            ans = len;
            ansIndex = i;
        }
    }
    return ansIndex;
}