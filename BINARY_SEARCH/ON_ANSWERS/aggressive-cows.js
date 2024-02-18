const canWePlaceCow = function(arr, dist, cows) {
    let lastCoord = arr[0];
    let cowCount = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] - lastCoord >= dist) {
            cowCount++;
            lastCoord = arr[i];
        }
        if (cowCount >= cows) {
            return true;
        }
    }

    return false;
}

const aggressiveCows = function(arr, cows) {
    arr = arr.sort((a,b) => a - b);
    let low = 1;
    let high = arr[arr.length - 1] - arr[0];
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = canWePlaceCow(arr, mid, cows);
        if(res) low = mid + 1;
        else high = mid - 1;
    }

    return high;
}