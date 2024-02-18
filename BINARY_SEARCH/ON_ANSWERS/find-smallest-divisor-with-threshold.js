const getThreshold = function(arr, diviser) {
    let threshold = 0;
    for(let i = 0; i < arr.length; i++) {
        threshold += Math.ceil(arr[i] / diviser);
    }
    return threshold;
}

var smallestDivisor = function(arr, threshold) {
    let low = 1;
    let high = arr[0];
    for(let i = 1;i < arr.length; i++) {
        high = Math.max(high, arr[i]);
    }
    if(high < low) return -1;
    let ans = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const calThreshold = getThreshold(arr, mid);
        if(calThreshold <= threshold) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};