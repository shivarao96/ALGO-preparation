var totalDays = function(arr, capacity) {
    let load = 0;
    let days = 1;
    for(let i = 0 ;i < arr.length; i++) {
        if(load + arr[i] > capacity) {
            days += 1;
            load = arr[i]
        } else load += arr[i];
    }

    return days;
}

var shipWithinDays = function(weights, days) {
    let low = weights[0];
    let high = weights[0];

    for(let i = 1; i < weights.length; i++) {
        low = Math.max(low, weights[i]);
        high += weights[i];
    }

    let ans = -1;

    while(low <= high) {
        const mid = Math.floor((low + high)/2);
        const capacity = totalDays(weights, mid);
        if(capacity <= days) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }

    return ans;
};