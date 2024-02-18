var findKthPositive = function(arr, k) {
    let low = 0;
    let high = arr.length;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const missing = arr[mid] - (mid  + 1);
        if (k > missing) {
            low = mid + 1;
        } else high = mid - 1;
    }

    return 1 + high + k;
};